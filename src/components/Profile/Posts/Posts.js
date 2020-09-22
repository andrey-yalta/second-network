import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, postChangedActionCreator} from "../../../redux/state";

const Posts =(props)=>{

    let postChanged =(e)=>{
        let postValue  = e.target.value;
        props.onPostChanged(postValue);
    }

    return(
        <div>
            <div className={s.postCreator}>
                <textarea onChange={postChanged}  value={props.postCurrentValue}/>

                <br/>
                <button onClick={props.addPost}> post</button>
            </div>
            {props.postsElements}
        </div>

    )
}
export default Posts;