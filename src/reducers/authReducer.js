import { 
    SUCCESS_SIGN_UP,
    SUCCESS_LOGIN,
    SUCCESS_LOGOUT, 
    SET_USER
   } from "../actions/actionType"


const initialAuthState={
  isSignUpSuccess:false,
  isLoginSuccess:false,
  isLogout:false,
  user:null,
};

    export  default function auth(state=initialAuthState,action){

        switch(action.type){
            case SUCCESS_SIGN_UP:
            return {
                ...state,
                isSignUpSuccess:action.isSignUpSuccess,
                message:action.message
            }

            case SUCCESS_LOGIN:
                return {
                    ...state,
                    isLoginSuccess:action.isLoginSuccess,
                    user:action.user,
                    message:action.message
                }

            case SUCCESS_LOGOUT:
                return {
                ...state,
                isLogout:action.isLogout,
                user:action.user,
                 isLoginSuccess:false,
                 isSignUpSuccess:false,
            }
             
            case SET_USER:
                return {
                ...state,
                user:action.user
            }

            default:
             return state;
        }
        
   }