import React from "react";
import s from "./Dialogs.module.css"
import userIcon from "../../common/img/user.png"
import {NavLink} from "react-router-dom";
const Dialogs =()=>{
    return(
        <div className={s.dialogs}>
            <div className={s.users}>
                <div className={`${s.user} ${s.active}`}><img src={userIcon} alt=""/> <NavLink to={"/dialogs/1"}>Ivan</NavLink> </div>
                <div className={s.user}><img src={userIcon} alt=""/><NavLink to={"/dialogs/2"}> Sveta</NavLink></div>
                <div className={s.user}><img src={userIcon} alt=""/><NavLink to={"/dialogs/3"}> Sasha</NavLink></div>
                <div className={s.user}><img src={userIcon} alt=""/><NavLink to={"/dialogs/4"}> Igor</NavLink></div>
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