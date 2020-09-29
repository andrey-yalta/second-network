
let initialState ={

    users: [
        // {id:1, fullName:"Dimych", follow:true, status:"hello world", location:{city:"Minsk", country:"Belarus"}},
        // {id:2, fullName:"Ivan", follow:false, status:"yo yo oy world", location:{city:"Kiev", country:"Ukraine"}},
        // {id:3, fullName:"Marina", follow:true, status:"i'm sexy and i know it", location:{city:"Yalta", country:"Russia"}},
    ],
    totalCount:20,
    pageSize:5,
    currentPage:1,
    isFetching:false,
    followingInProgress: [],

}
let  userReducers =(state = initialState,action)=>{
    debugger;
    switch (action.type) {
        case "FOLLOW":{
            debugger;
            let newState = {...state};
            newState.users = state.users.map(u =>{
                if(u.id === action.userId){u.follow = true;}
                return u;
            });
            return newState;}

        case "UNFOLLOW":{
            debugger;
            let newState = {...state};
            newState.users = state.users.map(u =>{
                if(u.id === action.userId){u.follow = false;}
                return u;
            });
            return newState;}
        case "SET-USERS":{
            debugger;
            return { ...state, users: [...action.state]};
        }
        case "CHANGE-CURRENT-PAGE":{
            debugger;
            let newState = {...state, currentPage: action.currentPage};

            return newState;}
        case "SET-TOTAL-USER-COUNT":{
            debugger;
            let newState = {...state, totalCount: action.totalCount};

            return newState;}
        case "TOGGLE-IS-FETCHING":{
            debugger;
            let newState = {...state, isFetching: action.isFetchingValue};
            return newState;}
        case "TOGGLE-FOLLOWING-IN-PROGRESS": {
            debugger;
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !== action.userId)
            };
        }

        default:
            return state;
    }
}
export default userReducers;


export const unFollow =(userId)=> ({type:"UNFOLLOW", userId:userId});
export const follow =(userId)=> ({type:"FOLLOW", userId:userId});
export const setUsers =(state)=>({type:"SET-USERS", state:state});
export const changeCurrentPage =(currentPage)=>({type:"CHANGE-CURRENT-PAGE", currentPage:currentPage});
export const setTotalUsersCount =(totalCount)=>({type:"SET-TOTAL-USER-COUNT", totalCount:totalCount});
export const toggleIsFetching =(isFetchingValue)=>({type:"TOGGLE-IS-FETCHING",isFetchingValue:isFetchingValue });
export const toggleIFollowingInProgress =(isFetching,userId)=>({type:"TOGGLE-FOLLOWING-IN-PROGRESS",isFetching:isFetching , userId:userId});