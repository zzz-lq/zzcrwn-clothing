import { Outlet } from "react-router-dom"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import { UserContext } from "../../contexts/user.context"
import { CartContext } from "../../contexts/cart.context"
import { useContext } from "react"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import {NavigationDiv,LogoContainer,NavLinkContainer,NavLink} from "./navigation.styles"

const Navigation = () => {

  const {currentUser,setCurrentUser} = useContext(UserContext)
  // alert(currentUser)
  const {open} = useContext(CartContext)

  const handleClick = async () => {
    await signOutUser();
    // setCurrentUser(null)
  }
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
            <NavLink as="span" onClick={handleClick}>Sign Out</NavLink>
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