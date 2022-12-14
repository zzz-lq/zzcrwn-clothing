import {CheckoutContainer,CheckoutHeader,HeaderBlock,Total} from "./cartCheckout.style"
// import { useContext } from "react"
// import { CartContext } from "../../contexts/cart.context"
import CheckoutItem from "../cart-checkout-item/cart-checkout-item.component"
import { useSelector } from "react-redux"
import { selectCartItems,selectCartTotalPrice } from "../../store/cart/cart.selector"
import PaymentForm from "../payment-form/payment-form.component"

const CartCheckout = () => {

  // const {cartItems,totalPrice} = useContext(CartContext)
  const cartItems = useSelector(selectCartItems)
  const totalPrice = useSelector(selectCartTotalPrice)
  
  return(
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock><span>Product</span></HeaderBlock>
        <HeaderBlock><span>Description</span></HeaderBlock>
        <HeaderBlock><span>Quantity</span></HeaderBlock>
        <HeaderBlock><span>Price</span></HeaderBlock>
        <HeaderBlock><span>Remove</span></HeaderBlock>
      </CheckoutHeader>
      {
        cartItems.map((cartItem) => {
          return(
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          )
        })
      }
      <Total>total price: ${totalPrice}</Total>
      <PaymentForm />
    </CheckoutContainer>
  )
}

export default CartCheckout

