import React from "react";
import Profile from "./Profile";

class ProfileAPIContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if(!userId) {
            userId =this.props.authorizedUserId;
        }
        this.props.getUserProfileThunkCreator(userId);
        this.props.getUserProfileStatusThunkCreator(userId);

    }
    render() {

        return(<Profile profilePage ={this.props.profile}  status={this.props.status} changeStatus={this.props.changeProfileStatusThunkCreator} />)
    }
}
export default ProfileAPIContainer;