import React from "react";
import {Redirect} from "react-router-dom";
import Dialogs from "../components/Dialogs/Dialogs";
import {compose} from "redux";
import {connect} from "react-redux";


let mapStateToProps = (state) => {

    return {

        isAuth: state.auth.isAuth,

    };
};

export const withRedirectComponent = (Component) =>{
    class WrapperComponent extends React.Component{
         render (){
            if(!this.props.isAuth) return <Redirect to={"/login"}/>
            else{
                return <Component {...this.props}/>;
            }
        }
    }
    return  connect(mapStateToProps)(WrapperComponent);
}
