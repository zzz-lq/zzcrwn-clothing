import ProductCard from "../prouduct-card/product-card.component"
import "./category-preview.styles.scss"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCategoriesIsloading } from "../../store/categories/category.selector"
import Spinner from "../spinner/spinner.component"

const CategoryPreview = ({title,products}) => {

  const isloading = useSelector(selectCategoriesIsloading)

  return(
    <div className="category-preview-container">
      <h2>
        
        <NavLink to={`/shop/${title}`}><span>{title.toLocaleUpperCase()}</span></NavLink>
      </h2>
      <div className="preview">
        {
         isloading ? <Spinner />: (
          products.filter((_,index) => (index < 4))
          .map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          )) 
         )
        }
      </div>
    </div>
  )
}

export default CategoryPreview