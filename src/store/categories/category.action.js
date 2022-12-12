import { createAction } from "../../utils/reducer/reducer"
import {CATEGOTY_ACTION_TYPE} from "./category.type"


export const setCategories = (categoriesArray) => (
  createAction(CATEGOTY_ACTION_TYPE.SET_CATEGORIES,categoriesArray)
)

export const fetchCategoriesStart = () => {
  return createAction(CATEGOTY_ACTION_TYPE.FETCH_CATEGORIES_START)
}

export const fetchCategoriesSuccess = (categoriesArray) => (
  createAction(CATEGOTY_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,categoriesArray)
)

export const fetchCategoriesFailed = (error) => (
  createAction(CATEGOTY_ACTION_TYPE.FETCH_CATEGORIES_FAILED,error)
)

// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart())
//   try{
//     const categoryArray = await getCategoriesAndDocuments("categories");
//     dispatch(fetchCategoriesSuccess(categoryArray))
//   }catch(error){
//     dispatch(fetchCategoriesFailed(error))
//   }
// }