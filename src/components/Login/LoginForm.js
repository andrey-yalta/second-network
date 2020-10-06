import React from "react";
import s from "./Login.module.css"
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormControl/FormControl";
import {required} from "../utils/Validators";




const LoginForm =(props)=>{
    return(

            <form  className={s.form} onSubmit={props.handleSubmit}>
                <div><Field component={Input} name={"email"} type="email" placeholder={"Login"} validate={[required]}/></div>
                <div><Field component={Input} name={"password"} type="password" placeholder={"Password"} validate={[required]}/></div>
                <div><Field component={Input} name={"saved"} type={"checkbox" }/></div>
                { props.error &&<div className={s.summaryError}> {props.error} </div>}
                <div><button>Logged in</button></div>
            </form>

    )
}
const loginReduxForm = reduxForm({form:"login"})(LoginForm);

export default loginReduxForm;