import App from "../App"
import { Routes,Route } from "react-router-dom"
import Navigation from "../component/navigation/navigation.component"
import Authentication from "../component/authentication/authentication.component"
import Shop from "./shop/shop.component"
import CartCheckout from "../component/cart-checkout/cartCheckout.component"


const MyRoute  = () => {

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