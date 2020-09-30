import React from "react";
import s from "./Users.module.css"
import userIcon from "./../../common/img/userIcon.png"
import {NavLink} from "react-router-dom";

const Users =(props)=>{
        return (
            <div>
                    {/*выделить в отдельную компоненту*/}
                <div className={s.paginator}>
                    {props.pages.map(p => (<span className={props.currentPage === p && s.active}
                                           key={p.id}
                                           onClick={() => {
                                               props.onPageChange(p)
                                           }}>
                    {p}</span>))}
                </div>

                <br/>

                {/*выделить в отдельную компоненту*/}
                {props.usersPage.users.map(u => (<div className={s.userItem} key={u.id}>
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
                        <button disabled={props.followingInProgress.some(id=> id === u.id)} onClick={() => {
                                debugger;
                                props.unfollowUsersThunkCreator(u.id);

                    }}>unfollow</button> :
                        <button disabled={props.followingInProgress.some(id=> id === u.id)} onClick={() => {
                                debugger;
                                props.followUsersThunkCreator(u.id);

                    }}> follow</button>}}
                </div>))}


            </div>
        )}
export default Users;