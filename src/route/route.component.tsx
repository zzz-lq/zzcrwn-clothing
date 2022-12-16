import App from "../App"
import { Routes,Route } from "react-router-dom"
import Navigation from "../component/navigation/navigation.component"
import Authentication from "../component/authentication/authentication.component"
import Shop from "./shop/shop.component"
import CartCheckout from "../component/cart-checkout/cartCheckout.component"
import {useEffect } from "react"
import { useDispatch } from "react-redux"
import { checkUserSession } from "../store/user/user.action"

const MyRoute  = () => {
  const dispath = useDispatch()

  useEffect(() => {
    dispath(checkUserSession())
  },[])
  // useEffect(()=>{
  //   const unsubscribe = onAuthStateChangedListener((user) => {

  //     if (user){
  //       createUserDocumentFromAuth(user)
  //     }
  //     dispath(setCurrentUser(user))
  //     // console.log(user)
  //   })

  //   return unsubscribe
  // },[])


  return(
    
    <Routes>
      
      <Route path="/" element={<Navigation />}>
        <Route index element={<App />} />
        <Route path="shop/*" element={<Shop />}>
          <Route />
        </Route>
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CartCheckout />} />
      </Route>
    </Routes>
  )
}

export default MyRoute