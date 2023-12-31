import {SUCCESS_SIGN_UP,SUCCESS_LOGIN,SUCCESS_LOGOUT,SET_USER} from './actionType';

//action creator Auth
export function successSignUp(val){
    return{
         type:SUCCESS_SIGN_UP,
         isSignUpSuccess:val,
     }
 }

 
 export function successLogin(val,user){
    return{
         type:SUCCESS_LOGIN,
         isLoginSuccess:val,
         user:user,
     }
 }
 
 export function successLogout(val,user){
    return{
         type:SUCCESS_LOGOUT,
         isLogout:val,
         user:user,
     }
 }

 export function setUser(user){
    return{
         type:SET_USER,
         user:user,
     }
 }