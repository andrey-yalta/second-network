import * as serviceWorker from './serviceWorker';
import state, {addPost, postChanged, subscribe} from "./state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

let renderEntireTree =()=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state ={state} addPost={addPost} postChanged={postChanged}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree();



//короче это колбэк, чтобы перерисовывать страницу когда она меняется
subscribe(renderEntireTree);
serviceWorker.unregister();
