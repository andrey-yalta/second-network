import React from "react";
import {unFollowAC, setUsersAC, followAC} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";


let mapStateToProps = (state) => {

    return {

        usersPage: state.usersPage,

    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {dispatch(followAC(userId))
        },
        unFollow: (userId) => {dispatch(unFollowAC(userId))
        },
        setUsers: (state) => {dispatch(setUsersAC(state))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;

