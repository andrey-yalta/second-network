import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, postChangedActionCreator} from "../../../redux/state";
import Posts from "./Posts";

const PostsContainer =(props)=>{

    let addPost = ()=>{
        props.dispatch(addPostActionCreator())
    }
    let postChanged =(postValue)=>{
        props.dispatch(postChangedActionCreator(postValue));
    }
    debugger;
    let postsElements = props.posts.map(p=> <Post key={p.id} message={p.text} id={p.id} like={p.like}/>);

    return(

        <Posts onPostChanged={postChanged} addPost={addPost} postsElements={postsElements} postCurrentValue={props.postCurrentValue}/>
    )
}
export default PostsContainer;
