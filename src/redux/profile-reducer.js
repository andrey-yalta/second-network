const SET_PROFILE = "SET-PROFILE";
let initialState ={

        posts: [
            {text: "post 1 ", id: 1, like: 12},
            {text: "post 2 ", id: 2, like: 13},
            {text: "post 3 ", id: 3, like: 15},
            {text: "post 4 ", id: 4, like: 2},
        ],
        currentValue: "",
        profile: {},
        isFetching:false,

}
let  profileReducer =(state = initialState,action)=>{
    switch (action.type) {
        case "ADD-POST":{

            let newState ={...state,
            posts:[...state.posts]};

            newState.posts.push({text: state.currentValue , id: 6, like: 2});
            newState.currentValue ="";
            debugger;
            return newState;}
        case "POST-CHANGED":{
            debugger;
            let newState = {...state};
            newState.currentValue = action.value;
            return newState;}
        case "SET-PROFILE":{
            debugger;
            return { ...state, profile: {...action.profile}};
        }
        case "TOGGLE-IS-FETCHING":{
            debugger;
            return {...state, isFetching: action.isFetchingValue};
        }
        default:
            return state;
    }
}
export default profileReducer;
export const toggleIsFetching =(isFetchingValue)=>({type:"TOGGLE-IS-FETCHING",isFetchingValue:isFetchingValue })
export const setProfile =(profile)=>({type:SET_PROFILE, profile:profile})