import {CATEGOTY_ACTION_TYPE} from "./category.type"

export const CATEGORY_INITSTATE = {
  categories:[],
  isloading: false,
  error: null,
}

export const categoryReducer = (state=CATEGORY_INITSTATE,action={}) => {
  const {type,payload} = action
  
  switch(type){
    case CATEGOTY_ACTION_TYPE.FETCH_CATEGORIES_START:
      return({...state,isloading:true})
    case CATEGOTY_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
      // alert("ok")
      return({...state,categories:payload,isloading:false})
    case CATEGOTY_ACTION_TYPE.FETCH_CATEGORIES_FAILED:
      // alert("ok")
      return({...state,error:payload,isloading:false})
    default:
      return(state)
  }
}