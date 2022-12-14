import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import {categoryReducer} from "./categories/category.reducer"
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  user:userReducer,
  category:categoryReducer,
  cart:cartReducer,
})