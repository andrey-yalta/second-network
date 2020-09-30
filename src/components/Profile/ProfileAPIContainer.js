import React from "react";
import Profile from "./Profile";


class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        debugger;

        let userId = this.props.match.params.userId;
        this.props.getUserProfileThunkCreator(userId);
    }
    render() {
        // debugger;
        return(<Profile profilePage ={this.props.profile} />)
    }
}

export default ProfileAPIContainer;