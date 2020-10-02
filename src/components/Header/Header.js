import React from "react";
import s from "./Header.module.css"
import icon from "../../vk.png";
import {NavLink} from "react-router-dom";
const Header =(props)=>{
    return(

        <div className={s.header}>

            <img src={icon} alt="network"/>
            <NavLink to={"/profile/10867"}><span>{props.login ? props.login: "no logined"}</span></NavLink>
        </div>
    )
}
export default Header;