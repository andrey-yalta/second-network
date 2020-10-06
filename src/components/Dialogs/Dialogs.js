import React from "react";
import s from "./Dialogs.module.css"
import {Redirect} from "react-router-dom";
import DialogsReduxForm from "./DialogsForm";






const Dialogs =(props)=>{
    let changedMessage =(e)=>{
        //e это короче как ссылка или что-то типа того
        // для примера можно посмотреть как в posts это реализовано через ref
        let messageValue = e.target.value;
        props.onChange(messageValue);
    }

    let addMessage =(state)=>{
        props.sendMessage(state.message);
    }

    return(
        <div className={s.dialogs}>
            <div className={s.users}>
                {props.usersElements}
            </div>
            <div className={s.messages}>
                {props.messageElements}

                <DialogsReduxForm  className={s.area} onSubmit={addMessage}/>
            </div>

        </div>
    )
}
export default Dialogs;