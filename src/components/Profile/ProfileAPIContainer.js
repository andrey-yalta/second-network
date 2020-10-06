import React from "react";
import Profile from "./Profile";
import {changeProfileStatusThunkCreator} from "../../redux/profile-reducer";
class ProfileAPIContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if(!userId) {
            userId =10867;
        }
        this.props.getUserProfileThunkCreator(userId);
        this.props.getUserProfileStatusThunkCreator(userId);

    }
    render() {
        // debugger;
        return(<Profile profilePage ={this.props.profile}  status={this.props.status} changeStatus={this.props.changeProfileStatusThunkCreator} />)
    }
}
export default ProfileAPIContainer;