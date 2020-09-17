import React from "react";
import s from "../Dialogs.module.css"
import userIcon from "../../../common/img/user.png"
import {NavLink} from "react-router-dom";


const UserItem = (props)=>{
    return(
        <div className={s.user}><img src={userIcon} alt=""/><NavLink to={`/dialogs/${props.id}`}> {props.name}</NavLink></div>
    )
}

let users = [
    {id:1,name:"Dimych"},
    {id:2,name:"Ivan"},
    {id:3,name:"Sveta"},
    {id:4,name:"Olga"},
    {id:5,name:"Sasha"},
]


export default UserItem;