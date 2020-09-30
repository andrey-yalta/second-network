import {headerAPI} from "../api/api";

const SET_AUTH_DATA = "SET-AUTH-DATA";
let initialState ={
    data:{},
    isAuth:false,
}
let  authReducer =(state = initialState,action)=>{
    switch (action.type) {

        case "SET-AUTH-DATA":{
            debugger;
            return { ...state, data: {...action.data}};
        }
        case "TOGGLE-IS-AUTH":{
            debugger;
            return {...state, isAuth: true};
        }
        default:
            return state;
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
                    debugger;
                    dispatch(toggleIsAuth());
                }

            })
        debugger;
    }
}
export default authReducer;
export const toggleIsAuth =()=>({type:"TOGGLE-IS-AUTH" })
export const setAuthData =(data)=>({type:SET_AUTH_DATA, data:data})