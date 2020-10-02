import React from "react";
import {
    toggleIsFetching,
    setAuthData, getAuthUserData,
} from "../../redux/auth-reducer";
import {connect} from "react-redux";

import Header from "./Header";


let mapStateToProps = (state) => {
    return {
        // isFetching: state.auth.isFetching,
        data:state.auth.data,
    };
};
class HeaderAPIContainer extends React.Component {

    componentDidMount() {
        // debugger;
        this.props.getAuthUserData();
        // debugger;
    }

    render() {
        // debugger;
        return(<Header  {...this.props.data.data}/>)
    }
}
const HeaderContainer = connect(mapStateToProps, {setAuthData,getAuthUserData})(HeaderAPIContainer);
export default HeaderContainer;

