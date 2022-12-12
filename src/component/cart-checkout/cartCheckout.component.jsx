import "./cartCheckout.style.scss"
// import { useContext } from "react"
// import { CartContext } from "../../contexts/cart.context"
import CheckoutItem from "../cart-checkout-item/cart-checkout-item.component"
import { useSelector } from "react-redux"
import { selectCartItems,selectCartTotalPrice } from "../../store/cart/cart.selector"
const CartCheckout = () => {

  // const {cartItems,totalPrice} = useContext(CartContext)
  const cartItems = useSelector(selectCartItems)
  const totalPrice = useSelector(selectCartTotalPrice)
  
  return(
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block"><span>Product</span></div>
        <div className="header-block"><span>Description</span></div>
        <div className="header-block"><span>Quantity</span></div>
        <div className="header-block"><span>Price</span></div>
        <div className="header-block"><span>Remove</span></div>
      </div>
      {
        cartItems.map((cartItem) => {
          return(
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          )
        })
      }
      <div className="total">total price: ${totalPrice}</div>
    </div>
  )
}

export default CartCheckout

