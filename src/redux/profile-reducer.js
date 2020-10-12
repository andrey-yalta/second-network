import {profileAPI} from "../api/api";

const SET_PROFILE = "SET-PROFILE";
const SET_PROFILE_STATUS = "SET-PROFILE-STATUS";

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
        status:"",
}
let  profileReducer =(state = initialState,action)=>{
    switch (action.type) {
        case "ADD-POST":{

            let newState ={...state,
            posts:[...state.posts]};

            newState.posts.push({text: action.value , id: 6, like: 2});
            // newState.currentValue ="";

            return newState;}
        case "POST-CHANGED":{

            let newState = {...state};
            newState.currentValue = action.value;
            return newState;}
        case "SET-PROFILE":{

            return { ...state, profile: {...action.profile}};
        }
        case "SET-PROFILE-STATUS":{

            return { ...state, status: action.statusValue};
        }
        case "TOGGLE-IS-FETCHING":{

            return {...state, isFetching: action.isFetchingValue};
        }
        default:
            return state;
    }
}
export default profileReducer;
export const toggleIsFetching =(isFetchingValue)=>({type:"TOGGLE-IS-FETCHING",isFetchingValue:isFetchingValue })
export const setProfile =(profile)=>({type:SET_PROFILE, profile:profile});
export const setStatus =(statusValue)=>({type:SET_PROFILE_STATUS, statusValue:statusValue});

export const getUserProfileThunkCreator =(userId)=>
    async(dispatch)=>{
        let data = await profileAPI.getProfile(userId)
                dispatch(setProfile(data));
}
export const getUserProfileStatusThunkCreator =(userId)=>
    async(dispatch)=>{
       let data = await profileAPI.getProfileStatus(userId)
            dispatch(setStatus(data));
    }

export const changeProfileStatusThunkCreator =(status)=>{
    return(dispatch)=>{
        profileAPI.changeProfileStatus(status)
            .then(data=>{
                if(data.resultCode ===0){
                    dispatch(setStatus(status))
                }
            })
    }
}