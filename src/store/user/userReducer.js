// import { USER_ACTION_TYPES } from "./user.type";

import {USER_ACTION_TYPES} from './user.type';

export const USER_INITIAL_STATE = {
  currentUser: null,
  idLoading: false,
  error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null };
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};

// const Init_state = {
//   currentUser:null
// }

// export const userReducer = (state = Init_state,action={}) => {
//   const {type, payload} = action;

//   switch(type){
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return{
//         ...state,
//         currentUser:payload,
//       }
//     default:
//       return state
//   }

// }

