import React from "react";
import {
    unFollow,
    setUsers,
    follow,
    changeCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./UsersAPIContainer";
import UsersAPIContainer from "./UsersAPIContainer";


let mapStateToProps = (state) => {

    return {

        usersPage: state.usersPage,
        totalCount:state.usersPage.totalCount,
        pageSize:state.usersPage.pageSize,
        currentPage:state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,

    };
};


const UsersContainer = connect(mapStateToProps, {follow,
    unFollow,
    setUsers,
    changeCurrentPage,
    setTotalUsersCount,
    toggleIsFetching})(UsersAPIContainer);
export default UsersContainer;

