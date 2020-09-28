import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar =(props)=> {
    debugger;
    return(
        <div className={s.sidebar} >
            {/*{props.login}*/}
            <ul>
                {/*NAvLink нужны чтобы страница не перезагружалась при переходе на ссылки*/}
                {/* activeClassName - надо сделать чтобы выделять ссылки (в  css - .item.active надо делать*/}
                <li><NavLink className={s.item} activeClassName={s.active} to="/profile">Profile</NavLink></li>
                <li><NavLink className={s.item} activeClassName={s.active} to="/dialogs">Message</NavLink></li>
                <li><NavLink className={s.item} activeClassName={s.active} to="/users">Users</NavLink></li>
                <li><NavLink className={s.item} activeClassName={s.active} to="/news">News</NavLink></li>
                <li><NavLink className={s.item} activeClassName={s.active} to="/music">Music</NavLink></li>
                <li><NavLink className={s.item} activeClassName={s.active} to="/settings">Settings</NavLink></li>
            </ul>
        </div>
    )
}
export default Navbar;