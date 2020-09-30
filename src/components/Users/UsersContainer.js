
import {
    unFollow,
    setUsers,
    follow,
    changeCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIFollowingInProgress,
    setUsersThunkCreator,
    unfollowUsersThunkCreator,
    followUsersThunkCreator,
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import UsersAPIContainer from "./UsersAPIContainer";


let mapStateToProps = (state) => {

    return {

        usersPage: state.usersPage,
        totalCount:state.usersPage.totalCount,
        pageSize:state.usersPage.pageSize,
        currentPage:state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,

    };
};


const UsersContainer = connect(mapStateToProps, {follow,
    unFollow,
    setUsers,
    changeCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIFollowingInProgress,
    setUsersThunkCreator,unfollowUsersThunkCreator,followUsersThunkCreator})(UsersAPIContainer);
export default UsersContainer;

