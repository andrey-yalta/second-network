import React from "react";
import s from "./Dialogs.module.css"
import userIcon from "../../common/img/user.png"
import {NavLink} from "react-router-dom";


const UserItem = (props)=>{
    return(
        <div className={s.user}><img src={userIcon} alt=""/><NavLink to={`/dialogs/${props.id}`}> {props.name}</NavLink></div>
    )
}

const Message = (props) =>{
    return(
    <div  className={s.message}>{props.message}</div>
    )
}

let usersData = [
    {id:1,name:"Dimych"},
    {id:2,name:"Ivan"},
    {id:3,name:"Sveta"},
    {id:4,name:"Olga"},
    {id:5,name:"Sasha"},
   ]
let dialogsData = [
    {id:1,message:"hello"},
    {id:2,message:"WHats up?"},
    {id:3,message:"How is your name?"},
    {id:4,message:"bla bla bla"},
    {id:5,message:"Yo"},
    {id:6,message:"Hello from Yata with love"},
    ]

const Dialogs =()=>{
    return(
        <div className={s.dialogs}>
            <div className={s.users}>
                <UserItem id={usersData[0].id} name={usersData[0].name}/>
                <UserItem id={usersData[1].id} name={usersData[1].name}/>
                <UserItem id={usersData[2].id} name={usersData[2].name}/>
                <UserItem id={usersData[3].id} name={usersData[3].name}/>
            </div>
            <div className={s.messages}>
                <Message message={dialogsData[0].message} id={dialogsData[0].id}/>
                <Message message={dialogsData[1].message} id={dialogsData[1].id}/>
                <Message message={dialogsData[2].message} id={dialogsData[2].id}/>
                <Message message={dialogsData[3].message} id={dialogsData[3].id}/>
                <Message message={dialogsData[4].message} id={dialogsData[4].id}/>

            </div>
        </div>
    )
}
export default Dialogs;