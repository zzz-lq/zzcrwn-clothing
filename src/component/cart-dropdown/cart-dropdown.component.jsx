import Button,{BUTTON_TYPE_CLASSES} from "../button/Button.component"
import {CartDropdownContainer,EmptyMessage,CartItems} from "./cart-dropdown.style.jsx"
import CartItem from "../cart-item/cart-item.component"
// import { useContext } from "react"
// import { CartContext } from "../../contexts/cart.context"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { selectCartItems } from "../../store/cart/cart.selector"

const CartDropdown = () => {

  // const {cartItems} = useContext(CartContext)
  // alert(cartItems)
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate()
  // alert(cartItems)
  return(
    <CartDropdownContainer>
      <CartItems>
      {
        cartItems.length ? (cartItems.map((cartItem) => 
        <CartItem key={cartItem.id} cartItem={cartItem} />
      )):(
        <EmptyMessage>Your cart is empty.</EmptyMessage>
      )
      }
      </CartItems>
      <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={() => (navigate("/checkout"))}>Checkout</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown