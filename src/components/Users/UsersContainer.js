import React from "react";
import {
    unFollowAC,
    setUsersAC,
    followAC,
    changeCurrentPageAC,
    setTotalUsersCountAC,
    toggleIsFetchingAC
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
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {dispatch(followAC(userId))
        },
        unFollow: (userId) => {dispatch(unFollowAC(userId))
        },
        setUsers: (state) => {dispatch(setUsersAC(state))
        },
        changeCurrentPage: (currentPage) =>{dispatch(changeCurrentPageAC(currentPage))},
        setTotalUsersCount: (totalCount)=>{dispatch(setTotalUsersCountAC(totalCount))},
        toogleIsFetching:(isFetching)=>{dispatch(toggleIsFetchingAC(isFetching))},
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);
export default UsersContainer;

