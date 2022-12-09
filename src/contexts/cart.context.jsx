import { useEffect } from "react"
import { createContext,useState } from "react"

export const CartContext = createContext({
  open:false,
  setOpen:() => null,
  cartItems: [],
  addItemToCart: () => null,
  cartCount:0,
  removeItemToCart: () => null,
  delectItemToCart:() => null,
  totalPrice:0
})

// cartItems以前本来有的，productToAdd，新加的
const addCartItem = (cartItems,productToAdd) => {
  const exit = cartItems.find((cartItem) => (cartItem.id === productToAdd.id))
  if (exit){
    return cartItems.map((cartItem) => (
      cartItem.id === productToAdd.id ? {...cartItem,quantity:cartItem.quantity+1} : cartItem
    ))
  }
  return [...cartItems,{...productToAdd,quantity:1}]
}

const removeCartItem = (cartItems,productToRemove) => {
  
  const exits = cartItems.find((cartItem) =>(cartItem.id === productToRemove.id))

  if (exits.quantity === 1){
    return cartItems.filter((cartItem) =>(cartItem.id !== exits.id))
  }

  return cartItems.map ((cartItem) => {
    if (cartItem.id === productToRemove.id) {
      return ({...cartItem,quantity:cartItem.quantity -1})
    }else {
      return cartItem
    }
  })
}

export const CartProvider = ({children}) => {

  const [open,setOpen] = useState(false)
  const [cartItems,setCartItems] = useState([])
  const [cartCount,setCartCount] = useState(0);
  const [totalPrice,setTotalPrice] = useState(0);

  useEffect(()=>{
    const newCartCount = cartItems.reduce((total,cartItem) => total+cartItem.quantity,0)
    setCartCount(newCartCount)
    const newTotoalPrice = cartItems.reduce((total,cartItem) => (total+cartItem.quantity*cartItem.price),0)
    setTotalPrice(newTotoalPrice)
  },[cartItems])

  const addItemToCart = (productToAdd) => { 
    setCartItems(addCartItem(cartItems,productToAdd))
  }
  const removeItemToCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems,productToRemove))
  }
  const delectItemToCart = (productDelect) => {
    setCartItems(cartItems.filter((cartItem) => (cartItem.id !== productDelect.id)))
  }
  
  const value = {open,setOpen,cartItems,addItemToCart,cartCount,removeItemToCart,delectItemToCart,totalPrice}
  
  return(
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}