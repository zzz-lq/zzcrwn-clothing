import { CategoryItem } from "../categories/category.type"
import { createAction,withMatch,ActionWithPayload } from "../../utils/reducer/reducer"
import { CART_ACTION_TYPES,CartItem } from "./cart.type"



// cartItems以前本来有的，productToAdd，新加的
const addCartItem = (cartItems:CartItem[],productToAdd:CategoryItem) => {
  const exit = cartItems.find((cartItem) => (cartItem.id === productToAdd.id))
  if (exit){
    return cartItems.map((cartItem) => (
      cartItem.id === productToAdd.id ? {...cartItem,quantity:cartItem.quantity+1} : cartItem
    ))
  }
  return [...cartItems,{...productToAdd,quantity:1}]
}

const removeCartItem = (cartItems:CartItem[],productToRemove:CategoryItem) => {
  
  const exits = cartItems.find((cartItem) =>(cartItem.id === productToRemove.id))

  if (exits?.quantity === 1){
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

const delectCartItem = (cartItems:CartItem[],productDelect:CategoryItem) =>{
  return cartItems.filter((cartItem) => (cartItem.id !== productDelect.id))
}

export type SetOpen = ActionWithPayload<CART_ACTION_TYPES.SET_OPEN,boolean>

export type SetCartItem = ActionWithPayload<CART_ACTION_TYPES.SET_CAERITEMS,CartItem[]>

export const setCartItem = withMatch((cartItems:CartItem[]):SetCartItem =>createAction(CART_ACTION_TYPES.SET_CAERITEMS,cartItems))


// 在具体使用时调用，并且由此时传入payload
export const addItemToCart = (cartItems:CartItem[],productToAdd:CategoryItem) => {
  const newCartItems = addCartItem(cartItems,productToAdd)
  return setCartItem(newCartItems)
}

export const removeItemToCart = (cartItems:CartItem[],productToRemove:CategoryItem) => {
  const newCartItems = removeCartItem(cartItems,productToRemove)
  return setCartItem(newCartItems)
}

export const delectItemToCart = (cartItems:CartItem[],productDelect:CategoryItem) => {
  const newCartItems = delectCartItem(cartItems,productDelect)
  return setCartItem(newCartItems)
}

export const setOpen = withMatch((open:boolean):SetOpen =>(createAction(CART_ACTION_TYPES.SET_OPEN,open)))