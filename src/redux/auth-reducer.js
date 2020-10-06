import {authAPI, headerAPI} from "../api/api";
import {Redirect} from "react-router-dom";
import React from "react";
import {dataKey} from "redux-form/lib/util/eventConsts";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = "SET-AUTH-DATA";
let initialState ={
    data:{},
    userId:null,
    isAuth:false,
}
let  authReducer =(state = initialState,action)=>{
    switch (action.type) {

        case "SET-AUTH-DATA":{

            return { ...state, data: {...action.data}, userId: action.data.data.id};
        }
        case "TOGGLE-IS-AUTH":{

            return {...state, isAuth: true};
        }
        case "AUTH-IS-OFF":{

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
                        let message = data.messages.length >0 ? data.messages[0] :"some error";

                        dispatch(stopSubmit("login",{_error:message}));
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
        return headerAPI.getHeader()
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