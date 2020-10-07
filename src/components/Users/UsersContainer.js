
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
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalCount,
    getUserPage
} from "../../redux/user-selectors";


let mapStateToProps = (state) => {

    return {

        usersPage: getUserPage(state),
        totalCount: getTotalCount(state),
        pageSize: getPageSize(state),
        currentPage:getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),

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

