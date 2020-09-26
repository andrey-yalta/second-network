import React from "react";
import {unFollowAC, setUsersAC, followAC, changeCurrentPageAC, setTotalUsersCountAC} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./UsersAPIContainer";
import UsersAPIContainer from "./UsersAPIContainer";


let mapStateToProps = (state) => {

    return {

        usersPage: state.usersPage,
        totalCount:state.usersPage.totalCount,
        pageSize:state.usersPage.pageSize,
        currentPage:state.usersPage.currentPage,

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
        changeCurrentPage: (currentPage) =>{dispatch(changeCurrentPageAC(currentPage))},
        setTotalUsersCount: (totalCount)=>{dispatch(setTotalUsersCountAC(totalCount))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);
export default UsersContainer;

