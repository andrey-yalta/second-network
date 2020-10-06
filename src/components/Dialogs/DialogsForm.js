import s from "../Profile/Posts/Posts.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxlengthCreator, required} from "../utils/Validators";
import {Textarea} from "../../common/FormControl/FormControl";

const maxLength100 = maxlengthCreator(100);
// создаем замыкание чтобы проверять на кол=во введённых символов
const dialogsForm =(props)=>{
    return(
        <form  className={s.postCreator} onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"message"}
                       placeholder={"your message"}
                       validate={[required,maxLength100]}/>
            </div>
            <div><button>Send</button></div>
        </form>

    )
}
const DialogsReduxForm = reduxForm({form:"dialogs"})(dialogsForm);
export default DialogsReduxForm;