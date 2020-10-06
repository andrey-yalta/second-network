import React from "react";
import s from "./Header.module.css"
import icon from "../../vk.png";
import {NavLink} from "react-router-dom";
const Header =(props)=>{

    return(

        <div className={s.header}>
            <img src={icon} alt="network"/>
            {props.isAuth? <NavLink to={"/profile/10867"}><span>{props.login ? props.login : "no logined"}</span></NavLink>: <NavLink to={"/login"}><span>{props.login ? props.login : "no logined"}</span></NavLink>}

            {props.isAuth? <button onClick={props.logout} >logout</button>: null}

        </div>
    )
}
export default Header;