import React from "react";
import Post from "./Post/Post";
import {addPostActionCreator, postChangedActionCreator} from "../../../redux/state";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps =(state)=>{
    // debugger;
    let postsElements = state.profilePage.posts.map(p=> <Post key={p.id} message={p.text} id={p.id} like={p.like}/>);
    return{
        postsElements: postsElements,
        postCurrentValue: state.profilePage.currentValue,
    }
}
let mapDispatchToProps =(dispatch) =>{
    return{
        addPost: (postValue) =>{dispatch(addPostActionCreator(postValue))} ,
        onPostChanged: (postValue) =>{dispatch(addPostActionCreator(postValue))},
    }
}

const dialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);
export default dialogsContainer;