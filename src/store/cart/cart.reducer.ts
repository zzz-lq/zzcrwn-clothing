import { CartItem } from "./cart.type"
import { AnyAction } from "redux"
import { setCartItem,setOpen } from "./cart.action"

export type CartState = {
  open:boolean,
  cartItems: CartItem[],
}

export const CART_INITSTATE = {
  open:false,
  cartItems:[],
}

export const cartReducer = (state=CART_INITSTATE,action={} as AnyAction):CartState => {

  if (setOpen.match(action)){
    return{
      ...state,
      open:action.payload,
    }
  }
  // 执行该action时，会调用相应add、remove函数，并传入payload
  if (setCartItem.match(action)){
    return{
      ...state,
      cartItems:action.payload,
    }
  }
  return state
}

  // switch (type){
  //   case CART_ACTION_TYPES.SET_OPEN:
  //     return{
  //       ...state,
  //       open:payload,
  //     }
  //   case CART_ACTION_TYPES.SET_CAERITEMS:
  //     return{
  //       ...state,
  //       cartItems:payload,
  //     }

  //   default:
  //     return state
  // }
