const ADD_POST = "ADD-POST";
const POST_CHANGED = "POST-CHANGED";
const ADD_MESSAGE = "ADD-MESSAGE";
const MESSAGE_CHANGED = "MESSAGE-CHANGED";
let store = {
    _state: {
        dialogsPage: {
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
            currentValue:""
        },
        postPage: {
            posts: [
                {text: "post 1 ", id: 1, like: 12},
                {text: "post 2 ", id: 2, like: 13},
                {text: "post 3 ", id: 3, like: 15},
                {text: "post 4 ", id: 4, like: 2},
            ],
            currentValue: "",
        }
    },
    getState(){
        return this._state;
    },
    renderEntireTree() {},

//короче это колбэк, чтобы перерисовывать страницу когда она меняется
    subscribe(observer) {
        debugger;
        this.renderEntireTree = observer;
    },
    // даннаый метод создан чтобы собрать в нем все методы по работе со стейтом и передавать лишь его а не 100+ методов по отдельности
    dispatch(action){
        debugger;
        if(action.type === "ADD-POST"){
            debugger;
            this._state.postPage.posts.push({text: this._state.postPage.currentValue , id: 6, like: 2})
            this._state.postPage.currentValue = "";
            this.renderEntireTree();
        }
        else if(action.type ==="POST-CHANGED"){
            debugger;
            this._state.postPage.currentValue = action.value;
            this.renderEntireTree();
        }
        else if(action.type ==="ADD-MESSAGE"){
            debugger;
            this._state.dialogsPage.messages.push({id: 7, message: this._state.dialogsPage.currentValue})
            this._state.dialogsPage.currentValue = "";
            this.renderEntireTree();
        }
        else if(action.type ==="MESSAGE-CHANGED"){
            debugger;
            this._state.dialogsPage.currentValue = action.value;
            this.renderEntireTree();
        }
    }
}
export default store;

export const addPostActionCreator =()=> ({type:ADD_POST})

export const postChangedActionCreator =(postValue)=>({type:POST_CHANGED, value:postValue})

export const addMessageActionCreator =()=> ({type:ADD_MESSAGE})

export const messageChangedActionCreator =(messageValue)=>({type:MESSAGE_CHANGED, value:messageValue})