import React from "react";
import s from "./Login.module.css"
import LoginForm from "./LoginForm";
const onSubmit=(state)=>{
    debugger;
    console.log(state.login)
}
const Login =()=>{
    return(
        <div>
            <h3>Login</h3>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}
export default Login;