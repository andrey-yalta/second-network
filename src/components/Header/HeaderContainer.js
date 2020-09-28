import React from "react";
import {

    toggleIsFetching,
    setAuthData,
} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import * as axios from "axios";
import Header from "./Header";

let mapStateToProps = (state) => {
    return {
        isFetching: state.auth.isFetching,
        data:state.auth.data,
    };
};
class HeaderAPIContainer extends React.Component {

    componentDidMount() {
        debugger;
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true})
            .then(response => {
                this.props.setAuthData(response.data);
                this.props.toggleIsFetching(false);
            })
        debugger;
    }

    render() {
        debugger;
        return(<Header  {...this.props.data.data}/>)
    }
}
const HeaderContainer = connect(mapStateToProps, {setAuthData,toggleIsFetching})(HeaderAPIContainer);
export default HeaderContainer;

