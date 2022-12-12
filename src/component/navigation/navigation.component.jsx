import { Outlet } from "react-router-dom"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
// import { CartContext } from "../../contexts/cart.context"
// import { useContext } from "react"
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import {NavigationDiv,LogoContainer,NavLinkContainer,NavLink} from "./navigation.styles"
import { useSelector,useDispatch } from "react-redux"
import { selectorCurrentUser } from "../../store/user/user.selector"
import { selectCartOpen } from "../../store/cart/cart.selector"
import { signOutStart } from "../../store/user/user.action"

const Navigation = () => {

  const dispatch = useDispatch()
  const currentUser = useSelector(selectorCurrentUser)
  // const {currentUser,setCurrentUser} = useContext(UserContext)
  // alert(currentUser)
  // const {open} = useContext(CartContext)
  const open = useSelector(selectCartOpen)

  const signOutUser = () => dispatch(signOutStart())

  
  return(
    <>
    <NavigationDiv>
      <LogoContainer to="/">
        <CrwnLogo />
      </LogoContainer>
      <NavLinkContainer>
        <NavLink to="/shop">
          SHOP
        </NavLink>
        {
          currentUser ? (
            <NavLink as="span" onClick={signOutUser}>Sign Out</NavLink>
          ):(
            <NavLink to="/auth">
              Sign In
            </NavLink>
          )
        }
        <CartIcon />
      </NavLinkContainer>
      {
        open && (
          <CartDropdown />
        )
      }
    </NavigationDiv>
    <Outlet />
    </>
  )
}

export default Navigation