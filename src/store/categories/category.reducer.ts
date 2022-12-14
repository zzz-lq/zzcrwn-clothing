import {Category} from "./category.type"
import { fetchCategoriesFailed,fetchCategoriesStart,fetchCategoriesSuccess } from "./category.action"
import { AnyAction } from "redux"


export type CategoryState = {
  readonly categories: Category[],
  readonly isloading: boolean,
  readonly error: Error | null,
}

export const CATEGORY_INITSTATE: CategoryState = {
  categories:[],
  isloading: false,
  error: null,
}

export const categoryReducer = (state=CATEGORY_INITSTATE,action={} as AnyAction): CategoryState => {
  
  // 真正做到传入anyAction，进行类别narrow
  if (fetchCategoriesStart.match(action)){
    return({...state,isloading:true})
  }

  if (fetchCategoriesSuccess.match(action)){
    return({...state,categories:action.payload,isloading:false})
  }

  if (fetchCategoriesFailed.match(action)){
    return({...state,error:action.payload,isloading:false})
  }

  return state
  // 变相narrow，具体到每一个payload的类型，但是不够其实不对，因为action只能传入联合类型的三个(还有其他action，例如redux的init或者中间件的一些操作)，不能传入anyaction。说白了只是限制输入类型，并不是接受所有类型，在内部narrow

  // switch(action.type){
  //   case CATEGOTY_ACTION_TYPE.FETCH_CATEGORIES_START:
  //     return({...state,isloading:true})
  //   case CATEGOTY_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
  //     // alert("ok")
  //     return({...state,categories:action.payload,isloading:false})
  //   case CATEGOTY_ACTION_TYPE.FETCH_CATEGORIES_FAILED:
  //     // alert("ok")
  //     return({...state,error:action.payload,isloading:false})
  //   default:
  //     return(state)
  // }
}