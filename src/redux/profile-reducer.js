let  profileReducer =(state,action)=>{
    switch (action.type) {
        case "ADD-POST":
            state.posts.push({text: state.currentValue , id: 6, like: 2})
            state.currentValue = "";
            return state;
        case "POST-CHANGED":
            state.currentValue = action.value;
            return state;
        default:
            return state;
    }
}
export default profileReducer;