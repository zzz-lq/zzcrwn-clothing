import "./category.styles.scss"
import { useParams } from "react-router-dom"
import { CategoriesContext } from "../../contexts/categories.context"
import ProductCard from "../prouduct-card/product-card.component"
import { useContext } from "react"
import { useState } from "react"
import { useEffect } from "react"

const Categoty = ({}) => {

  const {categoriesMap} = useContext(CategoriesContext)
  const {category} = useParams()
  const [products,setProducts] = useState([])

  useEffect(() => {
    setProducts(categoriesMap[category])
  },[category,categoriesMap])

  return(
    <>
      <h1>{category.toLocaleUpperCase()}</h1>
      <div className="category-container">
      { //因为异步原因
        products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))
      }
      </div>
    </>
    
  )
}

export default Categoty