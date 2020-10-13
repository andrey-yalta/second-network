import {
    changeProfileStatusThunkCreator,
    editModeChanged, getUserProfileStatusThunkCreator,
    getUserProfileThunkCreator, savePhotoThunkCreator,
    toggleIsFetching
} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import ProfileAPIContainer from "./ProfileAPIContainer";
import {setProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

let mapStateToProps = (state) => {

    return {

        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        status:state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth:state.auth.isAuth,

    };
};


export default compose(connect(mapStateToProps, {setProfile,
    toggleIsFetching,
    getUserProfileThunkCreator,
        getUserProfileStatusThunkCreator,changeProfileStatusThunkCreator, savePhotoThunkCreator}),
    withRouter)(ProfileAPIContainer);
