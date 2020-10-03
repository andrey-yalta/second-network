import React from "react";
import s from "./Login.module.css"
import {Field, reduxForm} from "redux-form";




const LoginForm =(props)=>{
    return(

            <form  className={s.form} onSubmit={props.handleSubmit}>
                <div><Field component={"input"} name={"login"} type="text" placeholder={"Login"}/></div>
                <div><Field component={"input"} name={"password"} type="text" placeholder={"Password"}/></div>
                <div><Field component={"input"} name={"saved"} type={"checkbox" }/></div>

                <div><button>Logged in</button></div>
            </form>

    )
}
const loginReduxForm = reduxForm({form:"login"})(LoginForm);

export default loginReduxForm;