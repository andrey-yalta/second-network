import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {addPost} from "./state";

ReactDOM.render(

  <React.StrictMode>
    <App state ={state} addPost={addPost}/>
  </React.StrictMode>,
  document.getElementById('root')
    // Здесь важный момент, мы вставляем нашу главную компоненту из App
    // в Div с классом root. т.е. root у нас единственный и вызывается он в index html


);

serviceWorker.unregister();
