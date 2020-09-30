
import {
    getUserProfileThunkCreator,
    toggleIsFetching

} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import ProfileAPIContainer from "./ProfileAPIContainer";
import {setProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


let mapStateToProps = (state) => {

    return {

        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,

    };
};

let withUrlDataContainerComponent = withRouter(ProfileAPIContainer);
const ProfileContainer = connect(mapStateToProps, {setProfile, toggleIsFetching,getUserProfileThunkCreator})(withUrlDataContainerComponent);
export default ProfileContainer;
