import { createContext,useReducer } from "react"
import { createReducer } from "../utils/reducer/reducer"

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

const delectCartItem = (cartItems,productDelect) =>{
  cartItems.filter((cartItem) => (cartItem.id !== productDelect.id))
}

export const CART_ACTION_TYPES = {
  SET_OPEN:"SET_OPEN",
  SET_CAERITEMS:'SET_CAERITEMS',
  // SET_CART_COUNT:'SET_CART_COUNT',
  // SET_TOTAL_PRICE:'SET_TOTAL_PRICE',
}


const cartReducer = (state,action) => {
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
        ...payload
      }
    // 单个更新太多琐碎代码，直接一次更新这三个的内容，因为items变化count、price也一定会变化，一起更新即可
    // case CART_ACTION_TYPES.SET_CAERITEMS:
    //   return{
    //     ...state,
    //     cartItems:payload
    //   }
    // case CART_ACTION_TYPES.SET_CART_COUNT:
    //   return{
    //     ...state,
    //     cartCount:payload,
    //   }
    // case CART_ACTION_TYPES.SET_TOTAL_PRICE:
    //   return{
    //     ...state,
    //     totalPrice:payload,
    //   }
    default:
      throw new Error(`Unhandle type of ${type} in CartReducer`)
  }
}

// reducer中只包含可读的值
const Init_state = {
  open:false,
  cartItems:[],
  cartCount:0,
  totalPrice:0,
}

export const CartProvider = ({children}) => {

  const [{open,cartItems,cartCount,totalPrice},dispath] = useReducer(cartReducer,Init_state)

  const setOpen = (open) => {
    dispath(CART_ACTION_TYPES.SET_OPEN,open)
  }

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total,cartItem) => total+cartItem.quantity,0)
    const newTotoalPrice = newCartItems.reduce((total,cartItem) => (total+cartItem.quantity*cartItem.price),0)

    dispath(createReducer(CART_ACTION_TYPES.SET_CAERITEMS,
      {cartItems:newCartItems,
      cartCount:newCartCount,
      totalPrice:newTotoalPrice,}
    ))
  }
  // const setCartItems = (cartItems) => {
  //   dispath({type:CART_ACTION_TYPES.SET_CAERITEMS,action:cartItems})
  // }
  // const setCartCount = (count) => {
  //   dispath({type:CART_ACTION_TYPES.SET_CART_COUNT,action:count})
  // }
  // const setTotalPrice = (totalPrice) => {
  //   dispath({type:CART_ACTION_TYPES.SET_TOTAL_PRICE,action:totalPrice})
  // }
  // const [open,setOpen] = useState(false)
  // const [cartItems,setCartItems] = useState([])
  // const [cartCount,setCartCount] = useState(0);
  // const [totalPrice,setTotalPrice] = useState(0);


  const addItemToCart = (productToAdd) => { 
    updateCartItemsReducer(addCartItem(cartItems,productToAdd))
  }
  const removeItemToCart = (productToRemove) => {
    updateCartItemsReducer(removeCartItem(cartItems,productToRemove))
  }
  const delectItemToCart = (productDelect) => {
    updateCartItemsReducer(delectCartItem(cartItems,productDelect))
  }
  
  const value = {open,setOpen,cartItems,addItemToCart,cartCount,removeItemToCart,delectItemToCart,totalPrice}
  
  return(
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}