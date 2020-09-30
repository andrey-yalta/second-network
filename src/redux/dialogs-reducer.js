
let initialState ={

        users: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Ivan"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Olga"},
            {id: 5, name: "Sasha"}],
        messages: [
            {id: 1, message: "hello"},
            {id: 2, message: "WHats up?"},
            {id: 3, message: "How is your name?"},
            {id: 4, message: "bla bla bla"},
            {id: 5, message: "Yo"},
            {id: 6, message: "Hello from Yata with love"}
        ],
        currentValue:"",
        // isAuth:

}
let  dialogsReducer =(state = initialState,action)=>{
    debugger;
    switch (action.type) {
        case "ADD-MESSAGE":{
            debugger;
            let newState = {...state};
            newState.messages = [...state.messages]
            newState.messages.push({id: 7, message: state.currentValue})
            newState.currentValue = "";
            return newState;}
        case "MESSAGE-CHANGED":{
            debugger;
            let newState = {...state};
            newState.currentValue = action.value;
            return newState}
        default:
            return state;


    }

}
export default dialogsReducer;