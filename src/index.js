import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let state = {
    messagesData:{
        users : [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Ivan"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Olga"},
            {id: 5, name: "Sasha"}],
        messages : [
            {id: 1, message: "hello"},
            {id: 2, message: "WHats up?"},
            {id: 3, message: "How is your name?"},
            {id: 4, message: "bla bla bla"},
            {id: 5, message: "Yo"},
            {id: 6, message: "Hello from Yata with love"}
        ],
    },

     posts : [
        {text: "post 1 ", id: 1, like: 12},
        {text: "post 2 ", id: 2, like: 13},
        {text: "post 3 ", id: 3, like: 15},
        {text: "post 4 ", id: 4, like: 2},
    ]
}

ReactDOM.render(

  <React.StrictMode>
    <App state ={state}/>
  </React.StrictMode>,
  document.getElementById('root')
    // Здесь важный момент, мы вставляем нашу главную компоненту из App
    // в Div с классом root. т.е. root у нас единственный и вызывается он в index html


);

serviceWorker.unregister();
