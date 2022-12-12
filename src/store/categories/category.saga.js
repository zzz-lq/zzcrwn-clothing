import { takeLatest,all,call,put } from "redux-saga/effects";
import {CATEGOTY_ACTION_TYPE} from "./category.type"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"
import { fetchCategoriesFailed,fetchCategoriesSuccess } from "./category.action";

export function* fetchCategoriesAsync() {
  try{
    const categoryArray = yield call(getCategoriesAndDocuments,"categories");
    yield put(fetchCategoriesSuccess(categoryArray))
  }catch(error){
    yield put(fetchCategoriesFailed(error))
  }
}

export function* onFetchCategories(){
  // 最新的start，shop中调用start，start改变，此处开始运行。
  yield takeLatest(CATEGOTY_ACTION_TYPE.FETCH_CATEGORIES_START,fetchCategoriesAsync)
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)])
}