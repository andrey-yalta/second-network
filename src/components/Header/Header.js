import React from "react";
import s from "./Header.module.css"
import icon from "../../vk.png";
const Header =()=>{
    return(
        <div className={s.header}>
            <img src={icon} alt="network"/>
        </div>
    )
}
export default Header;