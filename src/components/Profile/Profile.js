import React from "react";
import s from "./Profile.module.css"

import ProfileInfo from "./ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
const Profile =(props)=>{
    // debugger;
    return(
        <div className={s.profile}>
            <ProfileInfo  {...props} />
            <PostsContainer />
        </div>
    )
}
export default Profile;