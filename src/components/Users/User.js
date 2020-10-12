import React from "react";
import s from "./Users.module.css"
import userIcon from "./../../common/img/userIcon.png"
import {NavLink} from "react-router-dom";


const User =({unfollowUsersThunkCreator,followingInProgress,followUsersThunkCreator, u, })=>{
    return (
        <div>

            <div className={s.userItem} key={u.id}>
                <h3>name: {u.name}</h3>
                <li><NavLink   to={`/profile/${u.id}`}>
                    <img src={u.photos.small ? u.photos.small : userIcon} alt=""/>
                </NavLink></li>
                <br/>
                <span>status : {u.status}</span>
                <br/>
                <span>user id: {u.id}</span>
                <br/>
                {u.followed ?
                    <button disabled={followingInProgress.some(id=> id === u.id)} onClick={() => {
                        debugger;
                        unfollowUsersThunkCreator(u.id);

                    }}>unfollow</button> :
                    <button disabled={followingInProgress.some(id=> id === u.id)} onClick={() => {
                        debugger;
                        followUsersThunkCreator(u.id);

                    }}> follow</button>}}
            </div>))}


        </div>
    )}
export default User;