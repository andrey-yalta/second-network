let  dialogsReducer =(state,action)=>{
    switch (action.type) {
        case "ADD-MESSAGE":
            state.messages.push({id: 7, message: state.currentValue})
            state.currentValue = "";
            return state;
        case "MESSAGE-CHANGED":
            state.currentValue = action.value;
            return state;
        default:
            return state;


    }

}
export default dialogsReducer;