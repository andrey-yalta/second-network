import {getAuthUserData} from "./auth-reducer";

let initialState ={
    initialized: false,
}

let  appReducer =(state = initialState,action)=>{
    switch (action.type) {

        case "INITIALIZED-SUCCESS":{

            return { ...state, initialized: true};
        }

        default:
            return state;
    }
}
export const initializedSuccess =()=> ({type: "INITIALIZED-SUCCESS"});
export const initializeApp =()=>(dispatch)=>{
    let promise = dispatch(getAuthUserData());
    promise.then(()=>{
        dispatch(initializedSuccess());
    })

}
export default appReducer;