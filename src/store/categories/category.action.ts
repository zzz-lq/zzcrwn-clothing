import { createAction,Action,ActionWithPayload } from "../../utils/reducer/reducer"
import {CATEGOTY_ACTION_TYPE,Category} from "./category.type"
import { withMatch } from "../../utils/reducer/reducer"

type FetchCategoriesStart = Action<CATEGOTY_ACTION_TYPE.FETCH_CATEGORIES_START>

type FetchCategoriesSuccess = ActionWithPayload<CATEGOTY_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,Category[]>

type FetchCategoriesFailed = ActionWithPayload<CATEGOTY_ACTION_TYPE.FETCH_CATEGORIES_FAILED,Error>

// export type CategoryAction= FetchCategoriesFailed | FetchCategoriesStart | FetchCategoriesSuccess

// 使用saga异步
export const fetchCategoriesStart = withMatch(():FetchCategoriesStart => {
  return createAction(CATEGOTY_ACTION_TYPE.FETCH_CATEGORIES_START)
})

export const fetchCategoriesSuccess = withMatch((categoriesArray:Category[]):FetchCategoriesSuccess => (
  createAction(CATEGOTY_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,categoriesArray)
))

export const fetchCategoriesFailed = withMatch((error:Error):FetchCategoriesFailed => (
  createAction(CATEGOTY_ACTION_TYPE.FETCH_CATEGORIES_FAILED,error)
))


// 使用thunk异步
// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart())
//   try{
//     const categoryArray = await getCategoriesAndDocuments("categories");
//     dispatch(fetchCategoriesSuccess(categoryArray))
//   }catch(error){
//     dispatch(fetchCategoriesFailed(error))
//   }
// }