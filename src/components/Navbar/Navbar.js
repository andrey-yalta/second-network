import React from "react";
import s from "./Navbar.module.css"

const Navbar =()=> {

    return(
        <div className={s.sidebar} >
            <ul>
                <li><a className={s.item} href="/profile">Profile</a></li>
                <li><a className={s.item} href="/dialogs">Message</a></li>
                <li><a className={s.item} href="/users">Users</a></li>
                <li><a className={s.item} href="/news">News</a></li>
                <li><a className={s.item} href="/music">Music</a></li>
                <li><a className={s.item} href="/settings">Settings</a></li>
            </ul>
        </div>
    )
}
export default Navbar;