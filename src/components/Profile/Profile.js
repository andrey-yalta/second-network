import React from "react";
import s from "./Profile.module.css"
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo";
const Profile =(props)=>{
    debugger;
    return(
        <div className={s.profile}>
            <ProfileInfo />
            <Posts posts={props.posts}/>
        </div>
    )
}
export default Profile;