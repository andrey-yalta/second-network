import React from "react";
import s from "./Dialogs.module.css"
import UserItem from "./UsersItem/UsersItem";
import Message from "./Messages/Messages";
import {addMessageActionCreator, messageChangedActionCreator} from "../../redux/state";



const Dialogs =(props)=>{
    debugger;

    let sendMessage =()=>{
        debugger;
        props.dispatch(addMessageActionCreator())
    }
    let changedMessage =(e)=>{
        //e это короче как ссылка или что-то типа того
        // для примера можно посмотреть как в posts это реализовано через ref
        let messageValue = e.target.value;
        props.dispatch(messageChangedActionCreator(messageValue));
    }


    // в map надо всегда добавлять строку key = id чтобы не вылезала ошибка в консоле
    let usersElements = props.dialogsPage.users.map(u => <UserItem key={u.id} id={u.id} name={u.name}/>); {/* обработка массива users с помощью map в jsx итемы*/}
    let messageElements = props.dialogsPage.messages.map(m=> <Message key={m.id} message={m.message} id={m.id}/>);
    return(
        <div className={s.dialogs}>
            <div className={s.users}>
                {usersElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.area}>
                    <textarea
                        placeholder={"Enter your message"} onChange={changedMessage} value={props.dialogsPage.currentValue}/>
                    <div>
                        <button onClick={sendMessage}>SEND</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dialogs;