import React from "react";
import s from "./Users.module.css"
import userIcon from "./../../common/img/userIcon.png"
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                    {u.follow ?
                        <button onClick={() => {
                                debugger;

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {withCredentials:true, headers:{"API-KEY":"5d16bb3c-e00e-4326-9938-6b442a102e86"}})
                                    .then(response => {
                                            debugger;
                                            if(response.data.resultCode === 0){
                                                    props.unFollow(u.id)
                                            }

                                    })

                    }}>unfollow</button> :
                        <button onClick={() => {
                                debugger;

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},
                                    {withCredentials:true, headers:{"API-KEY":"5d16bb3c-e00e-4326-9938-6b442a102e86"}})
                                    .then(response => {
                                            debugger;
                                            if(response.data.resultCode === 0){
                                                    props.follow(u.id)
                                            }

                                    })

                    }}> follow</button>}}
                </div>))}


            </div>
        )}
export default Users;