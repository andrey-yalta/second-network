import s from "./Posts.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxlengthCreator, required} from "../../utils/Validators";
import {Textarea} from "../../../common/FormControl/FormControl";

const maxLength10 = maxlengthCreator(10);
// создаем замыкание чтобы проверять на кол=во введённых символов
const postForm =(props)=>{
    return(
        <form  className={s.postCreator} onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"post"}
                       placeholder={"your text"}
                       validate={[required,maxLength10]}/>
            </div>
            <div><button>Send</button></div>
        </form>

    )
}
const PostReduxForm = reduxForm({form:"post"})(postForm);
export default PostReduxForm;