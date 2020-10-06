import React from "react";
import s from "./Posts.module.css"
import PostReduxForm from "./PostForm";

const Posts =(props)=>{
    let addPost =(state)=>{
        props.addPost(state.post);
    }
    return(
        <div>
            <PostReduxForm onSubmit={addPost}/>
            {props.postsElements}
        </div>
    )
}
export default Posts;


