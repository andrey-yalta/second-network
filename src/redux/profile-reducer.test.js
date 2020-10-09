import React from 'react';
import profileReducer from "./profile-reducer";
import {addPostActionCreator} from "./state";
const ADD_POST = "ADD-POST";

let initialState ={

    posts: [
        {text: "post 1 ", id: 1, like: 12},
        {text: "post 2 ", id: 2, like: 13},
        {text: "post 3 ", id: 3, like: 15},
        {text: "post 4 ", id: 4, like: 2},
    ]
}

//в данных тестах нужно чтобы profile reducer передавался в новую переменную newstate т.к. он возвращает state
it('new post should be added', () => {
    let newstate = profileReducer(initialState,{type:ADD_POST,value:"hello world"})
    expect(newstate.posts.length).toBe(5);
});

it('new post should be added', () => {
    let addPost = addPostActionCreator("hello world")
    let newstate = profileReducer(initialState,addPost)
    expect(newstate.posts[4].text).toBe("hello world");
});