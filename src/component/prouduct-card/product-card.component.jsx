import Button,{BUTTON_TYPE_CLASSES} from "../button/Button.component"
import "./product-card.style.scss"
// import { useContext } from "react"
// import { CartContext } from "../../contexts/cart.context"
import { useDispatch,useSelector } from "react-redux"
import { addItemToCart } from "../../store/cart/cart.action"
import { selectCartItems } from "../../store/cart/cart.selector"

const ProductCard = ({product}) => {

  const {name,price,imageUrl} = product
  // const {addItemToCart} = useContext(CartContext)
  const dispath = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const handleAddItem = () => {
    dispath(addItemToCart(cartItems,product))
  }

  return(
    <div className="product-card-container">
      <img src={imageUrl}/>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleAddItem}>Add to cart</Button>
    </div>
  )
}

export default ProductCard