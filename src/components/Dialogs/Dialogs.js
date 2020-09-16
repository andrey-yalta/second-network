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

const Dialogs =()=>{
    return(
        <div className={s.dialogs}>
            <div className={s.users}>
                <UserItem id={1} name={"Dimych"}/>
                <UserItem id={2} name={"Ivan"}/>
                <UserItem id={3} name={"Sveta"}/>
                <UserItem id={4} name={"Sasha"}/>

            </div>
            <div className={s.messages}>
                <Message message={"hello"}/>
                <Message message={"WHats up?"}/>
                <Message message={"How is your name?"}/>
                <Message message={"bla bla bla"}/>
                <Message message={"Yo"}/>
                <Message message={"Hello from Yata with love"}/>
            </div>
        </div>
    )
}
export default Dialogs;