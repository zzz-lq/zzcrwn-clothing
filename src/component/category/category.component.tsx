import {CategoryContainer} from  "./category.styles"
import { useParams } from "react-router-dom"
// import { CategoriesContext } from "../../contexts/categories.context"
import ProductCard from "../prouduct-card/product-card.component"
// import { useContext } from "react"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import {selectorCategoriesMap,selectCategoriesIsloading} from "../../store/categories/category.selector"
import Spinner from "../spinner/spinner.component"

type CategoryRouteParam = {
  category: string,
}

const Categoty = ({}) => {

  const categoriesMap = useSelector(selectorCategoriesMap)
  const isloading = useSelector(selectCategoriesIsloading)
  // const {categoriesMap} = useContext(CategoriesContext)
  const {category} = useParams<keyof CategoryRouteParam>() as CategoryRouteParam
  const [products,setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  },[category,categoriesMap])

  return(
    <>
      <h1>{category.toLocaleUpperCase()}</h1>
      <CategoryContainer>
      { //因为异步原因
        isloading ? <Spinner /> : (
          products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))
        )
      }
      </CategoryContainer>
    </>
    
  )
}

export default Categoty