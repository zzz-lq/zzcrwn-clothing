
import {ShoppingIcon,CartIconContainer,ItemCount} from "./cart-icon.styles.jsx"
import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"

const CartIcon = () => {

  const {open,setOpen,cartCount} = useContext(CartContext)

  const onClickCart = () => {
    setOpen(!open)
  }

 
  return(
    <CartIconContainer>
      <ShoppingIcon  onClick={onClickCart}/>
      <ItemCount>{
        cartCount
      }
      </ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon