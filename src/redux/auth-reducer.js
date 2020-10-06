import {authAPI, headerAPI} from "../api/api";
import {Redirect} from "react-router-dom";
import React from "react";
import {dataKey} from "redux-form/lib/util/eventConsts";

const SET_AUTH_DATA = "SET-AUTH-DATA";
let initialState ={
    data:{},
    isAuth:false,
}
let  authReducer =(state = initialState,action)=>{
    switch (action.type) {

        case "SET-AUTH-DATA":{
            // debugger;
            return { ...state, data: {...action.data}};
        }
        case "TOGGLE-IS-AUTH":{
            // debugger;
            return {...state, isAuth: true};
        }
        case "AUTH-IS-OFF":{
            debugger;
            return {...state, isAuth: false, data:{}};
        }
        default:
            return state;
    }
}

export const loginThunkCreator =(email, password, rememberMe = true)=>{
    return(dispatch)=>{

        authAPI.login(email,password,rememberMe)
            .then(
                data=>{

                    if(data.resultCode ===0){
                        dispatch(getAuthUserData());


                    }
                    else {
                        console.log("somthing error in login")
                    }
                }
            )
    }
}
export const logoutThunkCreator =()=>{
    return(dispatch)=>{
        authAPI.logout()
            .then(
                data=>{
                    if(data.resultCode ===0){

                        dispatch(authIsOff());


                    }
                }
            )
    }
}

export const getAuthUserData= ()=>{
    //надо обязательно оборачивать два раза даже если в первом вызове ничего не передаём, видимо для кол-бэка
    return(dispatch)=>
    {

        // dispatch(toggleIsFetching(true));
        headerAPI.getHeader()
            .then(data => {
                dispatch(setAuthData(data));
                if(data.resultCode ===0){

                    dispatch(toggleIsAuth());
                }

            })
        // debugger;
    }
}



export default authReducer;
export const authIsOff =()=>({type: "AUTH-IS-OFF"})
export const toggleIsAuth =()=>({type:"TOGGLE-IS-AUTH" })
export const setAuthData =(data)=>({type:SET_AUTH_DATA, data:data})