import React from "react";
import s from "./Dialogs.module.css"
import {Redirect} from "react-router-dom";






const Dialogs =(props)=>{
    let changedMessage =(e)=>{
        //e это короче как ссылка или что-то типа того
        // для примера можно посмотреть как в posts это реализовано через ref
        let messageValue = e.target.value;
        props.onChange(messageValue);
    }
     if(!props.isAuth) return <Redirect to={"/login"}/> ;

    return(
        <div className={s.dialogs}>
            <div className={s.users}>
                {props.usersElements}
            </div>
            <div className={s.messages}>
                {props.messageElements}
                <div className={s.area}>
                    <textarea
                        placeholder={"Enter your message"} onChange={changedMessage} value={props.value}/>
                    <div>
                        <button onClick={props.sendMessage}>SEND</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dialogs;