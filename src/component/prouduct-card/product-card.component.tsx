import Button,{BUTTON_TYPE_CLASSES} from "../button/Button.component"
import {ProductCardContainer,Footer} from "./product-card.style"
// import { useContext } from "react"
// import { CartContext } from "../../contexts/cart.context"
import { useDispatch,useSelector } from "react-redux"
import { addItemToCart } from "../../store/cart/cart.action"
import { selectCartItems } from "../../store/cart/cart.selector"
import { CategoryItem } from "../../store/categories/category.type"

export type ProductCardProps = {
  product : CategoryItem,
}

const ProductCard = ({product}:ProductCardProps) => {

  const {name,price,imageUrl} = product
  // const {addItemToCart} = useContext(CartContext)
  const dispath = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const handleAddItem = () => {
    dispath(addItemToCart(cartItems,product))
  }

  return(
    <ProductCardContainer>
      <img src={imageUrl}/>
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleAddItem}>Add to cart</Button>
    </ProductCardContainer>
  )
}

export default ProductCard