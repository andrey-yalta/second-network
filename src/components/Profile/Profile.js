import React from "react";
import s from "./Profile.module.css"
import profileBackground from "../../profile.jpeg";
import Posts from "./Posts/Posts";
const Profile =()=>{
    return(
        <div className={s.profile}>
            <img src={profileBackground} alt="prfile"/>
            <div> Ava + Description</div>
            <Posts/>
        </div>
    )
}
export default Profile;