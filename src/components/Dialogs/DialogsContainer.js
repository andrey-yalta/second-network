import React from "react";
import s from "./Dialogs.module.css"
import UserItem from "./UsersItem/UsersItem";
import Message from "./Messages/Messages";
import {addMessageActionCreator, messageChangedActionCreator} from "../../redux/state";
import Dialogs from "./Dialogs";


const DialogsContainer =(props)=>{
    debugger;

    let sendMessage =()=>{
        debugger;
        props.dispatch(addMessageActionCreator())
    }
    let onChange =(messageValue)=>{
        //e это короче как ссылка или что-то типа того
        // для примера можно посмотреть как в posts это реализовано через ref
        props.dispatch(messageChangedActionCreator(messageValue));
    }


    // в map надо всегда добавлять строку key = id чтобы не вылезала ошибка в консоле
    let usersElements = props.dialogsPage.users.map(u => <UserItem key={u.id} id={u.id} name={u.name}/>); {/* обработка массива users с помощью map в jsx итемы*/}
    let messageElements = props.dialogsPage.messages.map(m=> <Message key={m.id} message={m.message} id={m.id}/>);


    return(
        <Dialogs sendMessage={sendMessage} onChange={onChange} users = {usersElements} messages = {messageElements} value={props.dialogsPage.currentValue}/>

    )
}
export default DialogsContainer;