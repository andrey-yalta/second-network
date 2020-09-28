import React from "react";
import * as axios from "axios"
import {toggleIsFetching} from "../../redux/users-reducer";
import Profile from "./Profile";

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        // debugger;
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setProfile(response.data);
                this.props.toggleIsFetching(false);
            })
    }
    render() {
        // debugger;
        return(<Profile profilePage ={this.props.profile} />)
    }
}

export default ProfileAPIContainer;