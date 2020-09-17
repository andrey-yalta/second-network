import React from "react";
import s from "./Dialogs.module.css"
import usersElements from "./UsersItem/UsersItem";
import messageElements from "./Messages/Messages";


const Dialogs =()=>{
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