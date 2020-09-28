import React from "react";
import {
    toggleIsFetching

} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import ProfileAPIContainer from "./ProfileAPIContainer";
import {setProfile} from "../../redux/profile-reducer";


let mapStateToProps = (state) => {

    return {

        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,

    };
};


const ProfileContainer = connect(mapStateToProps, {setProfile, toggleIsFetching})(ProfileAPIContainer);
export default ProfileContainer;
