
let initialState ={

    users: [
        // {id:1, fullName:"Dimych", follow:true, status:"hello world", location:{city:"Minsk", country:"Belarus"}},
        // {id:2, fullName:"Ivan", follow:false, status:"yo yo oy world", location:{city:"Kiev", country:"Ukraine"}},
        // {id:3, fullName:"Marina", follow:true, status:"i'm sexy and i know it", location:{city:"Yalta", country:"Russia"}},
    ]

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
            return { ...state, users: [...state.users, ...action.state]};
        }
        default:
            return state;
    }
}
export default userReducers;


export const unFollowAC =(userId)=> ({type:"UNFOLLOW", userId:userId});
export const followAC =(userId)=> ({type:"FOLLOW", userId:userId});
export const setUsersAC =(state)=>({type:"SET-USERS", state:state});
