import React from "react";
import s from "./Profile.module.css"
import profileBackground from "../../profile.jpeg";
import userIcon from "../../common/img/userIcon.png";
import ProfileStatus from "./ProfileStatus/ProfileStatusHook";
const ProfileInfo =(props)=>{

    const onMainPhotoSelected =(e)=>{
        if(e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    }
    return(
        <div className={s.profile}>
            <img className={`${s.profile} ${s.avatar}`} src={props.profilePage.photos ?  (!!props.profilePage.photos.large? props.profilePage.photos.large:userIcon ) :userIcon} alt=""/><br/>
            {props.isOwner && <input type="file"  onChange={onMainPhotoSelected}/>}
            <ProfileStatus {...props}/>
            <span> <b>Name: </b> : {props.profilePage.fullName} </span> <br/>
            <span> <b>About me: </b> : {props.profilePage.aboutMe} </span> <br/>
            <span> <b>job: </b> : {props.profilePage.lookingForAJobDescription} </span> <br/>


        </div>
    )
}
export default ProfileInfo;