import "./cart-checkout-item.style.scss"
// import { useContext } from "react"
// import { CartContext } from "../../contexts/cart.context"
import { useDispatch,useSelector } from "react-redux"
import { selectCartItems } from "../../store/cart/cart.selector"
import { addItemToCart,delectItemToCart,removeItemToCart } from "../../store/cart/cart.action"
const CheckoutItem = ({cartItem}) => {

  const dispath = useDispatch()
  // const {addItemToCart,delectItemToCart,removeItemToCart} = useContext(CartContext)

  const cartItems = useSelector(selectCartItems)
  const addItemHandler = () => (dispath(addItemToCart(cartItems,cartItem)))
  const deleteItemHandler = () => (dispath(delectItemToCart(cartItems,cartItem)))
  const removeItemHandler = () => (dispath(removeItemToCart(cartItems,cartItem)))
  
  return(
    <div className="checkout-item-container" > 
      <div className="image-container">
        <img src={cartItem.imageUrl} alt={`${cartItem.name}`} />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
        <span className="value">{cartItem.quantity}</span>
        <div className="arrow" onClick={addItemHandler}>&#10095;</div>
      </span>
      <span className="price">{cartItem.price}</span>
      <span className="remove-button" onClick={deleteItemHandler}>&#10005;</span>
      
    </div>
  )
}

export default CheckoutItem