import React from "react";
import s from "./Users.module.css"
import userIcon from "./../../common/img/userIcon.png"
import * as axios from "axios"


const Users =(props)=>{
        debugger;
        return (

            <div>

                <div className={s.paginator}>
                    {props.pages.map(p => (<span className={props.currentPage === p && s.active}
                                           key={p.id}
                                           onClick={() => {
                                               props.onPageChange(p)
                                           }}>
                    {p}</span>))}
                </div>
                <br/>


                {props.usersPage.users.map(u => (<div className={s.userItem} key={u.id}>
                    <h3>name: {u.name}</h3>
                    <img src={u.photos.small ? u.photos.small : userIcon} alt=""/>
                    <br/>
                    <span>status : {u.status}</span>
                    <br/>

                    <span>user id: {u.id}</span>
                    <br/>
                    {u.follow ? <button onClick={() => {
                        props.unFollow(u.id)
                    }}>unfollow</button> : <button onClick={() => {
                        props.follow(u.id)
                    }}> follow</button>}

                </div>))}</div>
        )
    }
export default Users;