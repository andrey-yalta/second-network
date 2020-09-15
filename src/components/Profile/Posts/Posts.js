import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";
const Posts =()=>{
    return(
        <div>
            <div className={s.postCreator}>
                <textarea></textarea>
                <br/>
                <button> post</button>
            </div>
            <Post message ={"post 1"} like = {13}/>
            <Post message ={"post 2"} like = {1}/>
            <Post message ={"post 3"} like = {10}/>
        </div>

    )
}
export default Posts;