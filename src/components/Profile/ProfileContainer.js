import {
    changeProfileStatusThunkCreator,
    editModeChanged, getUserProfileStatusThunkCreator,
    getUserProfileThunkCreator,
    toggleIsFetching
} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import ProfileAPIContainer from "./ProfileAPIContainer";
import {setProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

let mapStateToProps = (state) => {
    debugger;
    return {

        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        status:state.profilePage.status,
    };
};


export default compose(connect(mapStateToProps, {setProfile,
    toggleIsFetching,
    getUserProfileThunkCreator,
        getUserProfileStatusThunkCreator,changeProfileStatusThunkCreator}),
    withRouter)(ProfileAPIContainer);
