import { createContext,useState,useEffect,useReducer } from "react"
import { onAuthStateChangedListener,createUserDocumentFromAuth } from "../utils/firebase/firebase.utils"

export const UserContext = createContext({
  currentUser:null,
  setCurrentUser: () => null,
})

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER : "SET_CURRENT_USER",

}

const userReducer = (state,action) => {
  const {type, payload} = action;

  switch(type){
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return{
        ...state,
        currentUser:payload,
      }
    default:
      throw new Error(`Unhandle type ${type} in UserReducer`)
  }

}

const Init_state = {
  currentUser:null
}

export const UserProvider = ({children}) => {

  const [state,dispath] = useReducer(userReducer,Init_state)
  const {currentUser} = state
  const setCurrentUser = (user) => {
    dispath({type:USER_ACTION_TYPES.SET_CURRENT_USER,payload:user})
  }
  // const [currentUser,setCurrentUser] = useState(null)
  const value = {currentUser,setCurrentUser}

    // 依靠listener对用户的登录、退出进行管理
  useEffect(()=>{
    const unsubscribe = onAuthStateChangedListener((user) => {

      if (user){
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
      // console.log(user)
    })

    return unsubscribe
  },[])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}