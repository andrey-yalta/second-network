import React from "react";
import s from "./Posts.module.css"
import {Field, reduxForm} from "redux-form";
import PostReduxForm from "./PostForm";

const Posts =(props)=>{

    let addPost =(state)=>{
        props.addPost(state.post);

    }

    return(
        <div>
            {/*<div className={s.postCreator}>*/}
            {/*    <textarea onChange={postChanged}  value={props.postCurrentValue}/>*/}

            {/*    <br/>*/}
            {/*    <button onClick={props.addPost}> post</button>*/}
            {/*</div>*/}
            <PostReduxForm onSubmit={addPost}/>
            {props.postsElements}
        </div>

    )
}
export default Posts;


