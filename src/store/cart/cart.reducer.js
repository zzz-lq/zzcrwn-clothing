import { CART_ACTION_TYPES } from "./cart.type"

export const CART_INITSTATE = {
  open:false,
  cartItems:[],
}

export const cartReducer = (state=CART_INITSTATE,action={}) => {
  const {type,payload} = action

  switch (type){
    case CART_ACTION_TYPES.SET_OPEN:
      return{
        ...state,
        open:payload,
      }
    case CART_ACTION_TYPES.SET_CAERITEMS:
      return{
        ...state,
        cartItems:payload,
      }

    default:
      return state
  }
}