import React from "react";
import s from "./Profile.module.css"
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo";
const Profile =(props)=>{
    debugger;
    return(
        <div className={s.profile}>
            <ProfileInfo />
            <Posts postCurrentValue ={props.postPage.currentValue} posts={props.postPage.posts} addPost={props.addPost} postChanged={props.postChanged}/>
        </div>
    )
}
export default Profile;