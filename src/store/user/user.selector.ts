import { createSelector } from "reselect"
import { UserState } from "./userReducer"
import { RootState } from "../store"

export const selectorUserReducer = (state:RootState):UserState => state.user

export const selectCurrentUser = createSelector(
  selectorUserReducer,
  (user) => user.currentUser
)