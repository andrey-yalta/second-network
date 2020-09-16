import React from "react";
import s from "./Profile.module.css"
import profileBackground from "../../profile.jpeg";
const ProfileInfo =()=>{
    return(
        <div className={s.profile}>
            <img src={profileBackground} alt="prfile"/>
            <div> Ava + Description</div>

        </div>
    )
}
export default ProfileInfo;