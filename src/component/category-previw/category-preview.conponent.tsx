import ProductCard from "../prouduct-card/product-card.component"
import {CategoryPreviewContainer,Title,Preview} from "./category-preview.styles"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCategoriesIsloading } from "../../store/categories/category.selector"
import Spinner from "../spinner/spinner.component"
import { CategoryItem } from "../../store/categories/category.type"

export type CategoryPreviewProps = {
  title: string,
  products:CategoryItem[]
}

const CategoryPreview = ({title,products}:CategoryPreviewProps) => {

  const isloading = useSelector(selectCategoriesIsloading)

  return(
    <CategoryPreviewContainer>
      <h2>
        
        <NavLink to={`/shop/${title}`}><Title>{title.toLocaleUpperCase()}</Title></NavLink>
      </h2>
      <Preview>
        {
         isloading ? <Spinner />: (
          products.filter((_,index) => (index < 4))
          .map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          )) 
         )
        }
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview