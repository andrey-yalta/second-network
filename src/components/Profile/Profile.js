import React from "react";
import s from "./Profile.module.css"
import profileBackground from "../../profile.jpeg";
const Profile =()=>{
    return(
        <div className={s.profile}>
            <img src={profileBackground} alt="prfile"/>
            <div> Ava + Description</div>
            <div className={s.post}>  <h4> POST 1</h4></div>
            <div className={s.post}>  <h4> POST 2</h4></div>
            <div className={s.post}>  <h4> POST 3</h4></div>
        </div>
    )
}
export default Profile;