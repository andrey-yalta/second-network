import {
    editModeChanged,
    getUserProfileThunkCreator,
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
    };
};

// export default compose(connect(mapStateToProps, {setProfile, toggleIsFetching,getUserProfileThunkCreator}), withRouter,withRedirectComponent)(ProfileAPIContainer);
export default compose(connect(mapStateToProps, {setProfile,
    toggleIsFetching,
    getUserProfileThunkCreator}),
    withRouter)(ProfileAPIContainer);
