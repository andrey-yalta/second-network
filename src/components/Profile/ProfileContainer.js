
import {
    getUserProfileThunkCreator,
    toggleIsFetching

} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import ProfileAPIContainer from "./ProfileAPIContainer";
import {setProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withRedirectComponent} from "../../hoc/withRedirect";
import Dialogs from "../Dialogs/Dialogs";
import {compose} from "redux";


let mapStateToProps = (state) => {

    return {

        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
    };
};

// let withUrlDataContainerComponent = withRouter(ProfileAPIContainer);
// let ProfileWithRedirect = withRedirectComponent(withUrlDataContainerComponent);
// const ProfileContainer = connect(mapStateToProps, {setProfile, toggleIsFetching,getUserProfileThunkCreator})(ProfileWithRedirect);
export default compose(connect(mapStateToProps, {setProfile, toggleIsFetching,getUserProfileThunkCreator}), withRouter,withRedirectComponent)(ProfileAPIContainer);
