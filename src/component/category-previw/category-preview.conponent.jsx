import ProductCard from "../prouduct-card/product-card.component"
import "./category-preview.styles.scss"
import { NavLink } from "react-router-dom"

const CategoryPreview = ({title,products}) => {

  return(
    <div className="category-preview-container">
      <h2>
        
        <NavLink to={`/shop/${title}`}><span>{title.toLocaleUpperCase()}</span></NavLink>
      </h2>
      <div className="preview">
        {
          products.filter((_,index) => (index < 4))
                  .map((product) => (
                    <ProductCard key={product.id} product={product}></ProductCard>
                  )) 
        }
      </div>
    </div>
  )
}

export default CategoryPreview