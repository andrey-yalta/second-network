let initialState ={

        posts: [
            {text: "post 1 ", id: 1, like: 12},
            {text: "post 2 ", id: 2, like: 13},
            {text: "post 3 ", id: 3, like: 15},
            {text: "post 4 ", id: 4, like: 2},
        ],
        currentValue: "",

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
        default:
            return state;
    }
}
export default profileReducer;