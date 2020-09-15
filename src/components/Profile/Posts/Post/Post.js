import React from "react";
import s from "./Post.module.css"
import ava from "./ava.png"
const Post =(props)=>{
    return(
        <div>
            <div className={s.post}><img src={ava} alt="ava"/>  <span> {props.text}</span> <br/> <div className={s.likes}> Likes: {props.like}</div></div>

        </div>

    )
}
export default Post;