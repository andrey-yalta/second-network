import React from "react";
import Profile from "./Profile";

class ProfileAPIContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if(!userId) {
            userId =this.props.authorizedUserId;
            if(!userId){
                this.props.history.push("/login");
                //здесь не совсем правильно, это мы вмешиваемся в жизненный цикл компоненты , лучше елать через рендер
                // но рендер только в jsx, а это метод программный
            }
        }
        this.props.getUserProfileThunkCreator(userId);
        this.props.getUserProfileStatusThunkCreator(userId);

    }
    render() {

        return(<Profile  savePhoto={this.props.savePhotoThunkCreator} isOwner={this.props.profile.userId ===this.props.authorizedUserId} profilePage ={this.props.profile}  status={this.props.status} changeStatus={this.props.changeProfileStatusThunkCreator} />)
    }
}
export default ProfileAPIContainer;