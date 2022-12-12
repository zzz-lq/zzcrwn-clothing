import { createAction } from "../../utils/reducer/reducer"
import { CART_ACTION_TYPES } from "./cart.type"



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

const delectCartItem = (cartItems,productDelect) =>{
  return cartItems.filter((cartItem) => (cartItem.id !== productDelect.id))
}


export const addItemToCart = (cartItems,productToAdd) => { 
  return createAction(CART_ACTION_TYPES.SET_CAERITEMS,addCartItem(cartItems,productToAdd))
}
export const removeItemToCart = (cartItems,productToRemove) => {
  return createAction(CART_ACTION_TYPES.SET_CAERITEMS,removeCartItem(cartItems,productToRemove))
}
export const delectItemToCart = (cartItems,productDelect) => {
  return createAction(CART_ACTION_TYPES.SET_CAERITEMS,delectCartItem(cartItems,productDelect))
}

export const setOpen = (open) => createAction(CART_ACTION_TYPES.SET_OPEN,open)