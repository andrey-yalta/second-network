import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

let renderEntireTree =(state)=>{
    // debugger;
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>    {/* короче это библиотека которая позволяет менять url адресс */}
            <Provider store={store} >
            {/* функция bind нужна чтобы при вызове методов эти методы ссылались на свой родно обьект в котором они созданы
            либо на тот обьект, с которым они забайдины*/}
            <App state ={state} dispatch={store.dispatch.bind(store)}/>
            </Provider>
            </BrowserRouter>
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
