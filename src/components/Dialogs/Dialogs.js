import React from "react";
import s from "./Dialogs.module.css"
import userIcon from "../../common/img/user.png"
const Dialogs =()=>{
    return(
        <div className={s.dialogs}>
            <div className={s.users}>
                <div className={`${s.user} ${s.active}`}><img src={userIcon} alt=""/> Ivan</div>
                <div className={s.user}><img src={userIcon} alt=""/> Sveta</div>
                <div className={s.user}><img src={userIcon} alt=""/> Sasha</div>
                <div className={s.user}><img src={userIcon} alt=""/> Igor</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Yo</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>I'm fucking programmer</div>
                <div className={s.message}>really?</div>
            </div>
        </div>
    )
}
export default Dialogs;