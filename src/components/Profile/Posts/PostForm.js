import s from "./Posts.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";

const postForm =(props)=>{
    return(

        <form  className={s.postCreator} onSubmit={props.handleSubmit}>
            <div><Field component={"input"} name={"post"} type="textarea" placeholder={"your text"}/></div>
            <div><button>Send</button></div>
        </form>

    )
}
const PostReduxForm = reduxForm({form:"post"})(postForm);
export default PostReduxForm;