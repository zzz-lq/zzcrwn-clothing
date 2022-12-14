
import {ShoppingIcon,CartIconContainer,ItemCount} from "./cart-icon.styles.jsx"
// import { useContext } from "react"
// import { CartContext } from "../../contexts/cart.context"
import { useSelector,useDispatch } from "react-redux"
import { selectCartOpen,selectCartCount } from "../../store/cart/cart.selector.js"
import { setOpen } from "../../store/cart/cart.action.js"

const CartIcon = () => {

  const open = useSelector(selectCartOpen)
  const cartCount = useSelector(selectCartCount)
  // const {open,setOpen,cartCount} = useContext(CartContext)
  const dispath = useDispatch()

  const onClickCart = () => {
    dispath(setOpen(!open))
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