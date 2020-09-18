import React from "react";
import s from "./Dialogs.module.css"
import UserItem from "./UsersItem/UsersItem";
import Message from "./Messages/Messages";


const Dialogs =(props)=>{
    debugger;
    let usersElements = props.dialogsPage.users.map(u => <UserItem id={u.id} name={u.name}/>); {/* обработка массива users с помощью map в jsx итемы*/}
    let messageElements = props.dialogsPage.messages.map(m=> <Message message={m.message} id={m.id}/>);
    return(
        <div className={s.dialogs}>
            <div className={s.users}>
                {usersElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}
export default Dialogs;