import React from "react";
import s from "./Dialogs.module.css"
import {messageChangedActionCreator} from "../../redux/state";




const Dialogs =(props)=>{
    let changedMessage =(e)=>{
        //e это короче как ссылка или что-то типа того
        // для примера можно посмотреть как в posts это реализовано через ref
        let messageValue = e.target.value;
        props.onChange(messageValue);
    }

    return(
        <div className={s.dialogs}>
            <div className={s.users}>
                {props.users}
            </div>
            <div className={s.messages}>
                {props.messages}
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