const SET_AUTH_DATA = "SET-AUTH-DATA";
let initialState ={
    data:{},
    isFetching:false,
}
let  authReducer =(state = initialState,action)=>{
    switch (action.type) {

        case "SET-AUTH-DATA":{
            debugger;
            return { ...state, data: {...action.data}};
        }
        case "TOGGLE-IS-FETCHING":{
            debugger;
            return {...state, isFetching: action.isFetchingValue};
        }
        default:
            return state;
    }
}
export default authReducer;
export const toggleIsFetching =(isFetchingValue)=>({type:"TOGGLE-IS-FETCHING",isFetchingValue:isFetchingValue })
export const setAuthData =(data)=>({type:SET_AUTH_DATA, data:data})