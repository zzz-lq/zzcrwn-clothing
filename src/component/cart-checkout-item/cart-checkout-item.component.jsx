import "./cart-checkout-item.style.scss"
import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"

const CheckoutItem = ({cartItem}) => {

  const {addItemToCart,delectItemToCart,removeItemToCart} = useContext(CartContext)

  const addItemHandler = () => (addItemToCart(cartItem))
  const deleteItemHandler = () => (delectItemToCart(cartItem))
  const removeItemHandler = () => (removeItemToCart(cartItem))
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