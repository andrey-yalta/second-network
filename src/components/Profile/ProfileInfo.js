import React from "react";
import s from "./Profile.module.css"
import profileBackground from "../../profile.jpeg";
import userIcon from "../../common/img/userIcon.png";
const ProfileInfo =(props)=>{
    debugger;
    return(
        <div className={s.profile}>
            <img src={profileBackground} alt="prfile"/>

            <img className={`${s.profile} ${s.avatar}`} src={props.profilePage.photos ?  props.profilePage.photos.large:userIcon} alt=""/><br/>
            <span> <b>Name: </b> : {props.profilePage.fullName} </span> <br/>
            <span> <b>status: </b> : {props.profilePage.aboutMe} </span> <br/>
            <span> <b>job: </b> : {props.profilePage.lookingForAJobDescription} </span> <br/>


        </div>
    )
}
export default ProfileInfo;