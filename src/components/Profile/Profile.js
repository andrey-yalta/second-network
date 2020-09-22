import React from "react";
import s from "./Profile.module.css"

import ProfileInfo from "./ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
const Profile =(props)=>{
    debugger;
    return(
        <div className={s.profile}>
            <ProfileInfo />
            <PostsContainer postCurrentValue ={props.postPage.currentValue} posts={props.postPage.posts} dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile;