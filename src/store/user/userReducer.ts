// import { USER_ACTION_TYPES } from "./user.type";
import { AnyAction } from 'redux';
import { UserData } from '../../utils/firebase/firebase.utils';
import { signInSuccess,signOutSuccess,signOutFailed,signInFailed,signUpFailed } from './user.action';

export type  UserState = {
  readonly currentUser: UserData | null,
  readonly idLoading: boolean,
  readonly error: Error | null,
};

export const USER_INITIAL_STATE = {
  currentUser: null,
  idLoading: false,
  error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action = {} as AnyAction):UserState => {
  
  if (signInSuccess.match(action)){
    return { ...state, currentUser: action.payload };
  }

  if (signOutSuccess.match(action)){
    return { ...state, currentUser: null };
  }

  if (signOutFailed.match(action) || signInFailed.match(action) || signUpFailed.match(action)){
    return { ...state, error: action.payload };
  }

  return state;
  // switch (type) {
  //   case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
  //     return { ...state, currentUser: action.payload };
  //   case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
  //     return { ...state, currentUser: null };
  //   case USER_ACTION_TYPES.SIGN_OUT_FAILED:
  //   case USER_ACTION_TYPES.SIGN_IN_FAILED:
  //   case USER_ACTION_TYPES.SIGN_UP_FAILED:
  //     return { ...state, error: action.payload };
  //   default:
  //     return state;
  // }
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

