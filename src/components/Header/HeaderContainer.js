import React from "react";
import {
    toggleIsFetching,
    setAuthData, getAuthUserData, logoutThunkCreator,
} from "../../redux/auth-reducer";
import {connect} from "react-redux";

import Header from "./Header";


let mapStateToProps = (state) => {
    return {
        // isFetching: state.auth.isFetching,
        data:state.auth.data,
        isAuth: state.auth.isAuth,
    };
};
class HeaderAPIContainer extends React.Component {

    componentDidMount() {
        // debugger;
        this.props.getAuthUserData();
        // debugger;
    }


    render() {

        return(<Header  {...this.props.data.data} isAuth ={this.props.isAuth} logout={this.props.logoutThunkCreator}/>)
    }
}
const HeaderContainer = connect(mapStateToProps, {setAuthData,getAuthUserData, logoutThunkCreator})(HeaderAPIContainer);
export default HeaderContainer;

