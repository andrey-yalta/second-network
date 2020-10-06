import React from "react";
import s from "./Login.module.css"
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {loginThunkCreator, logoutThunkCreator} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login =(props)=>{

    const onSubmit=(state)=>{

        props.loginThunkCreator(state.email,state.password, state.saved);
    }
    if(props.isAuth){

        return <Redirect to={"/profile"}/>
    }
    return(
        <div>
            <h3>Login</h3>
            <LoginForm  onSubmit={onSubmit}/>
        </div>
    )
}
let mapStateToProps = (state) => {
    return {

        isAuth: state.auth.isAuth,
    };
};
export default connect(mapStateToProps,{loginThunkCreator,logoutThunkCreator})(Login);
