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
        case "ADD-POST":
            state.posts.push({text: state.currentValue , id: 6, like: 2})
            state.currentValue = "";
            return state;
        case "POST-CHANGED":
            debugger;
            state.currentValue = action.value;
            return state;
        default:
            return state;
    }
}
export default profileReducer;