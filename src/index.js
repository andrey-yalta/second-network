import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

let renderEntireTree =(state)=>{
    debugger;
    ReactDOM.render(
        <React.StrictMode>
            {/* функция bind нужна чтобы при вызове методов эти методы ссылались на свой родно обьект в котором они созданы
            либо на тот обьект, с которым они забайдины*/}
            <App state ={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree(store.getState());



//короче это колбэк, чтобы перерисовывать страницу когда она меняется
store.subscribe(()=>{
    let state = store.getState();
    renderEntireTree(state);
});
serviceWorker.unregister();
