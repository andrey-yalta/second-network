import React from "react";
import s from "./Navbar.module.css"

const Navbar =()=> {

    return(
        <div className={s.sidebar} >
            <ul>
                <li><a className={s.item} href="#">Profile</a></li>
                <li><a className={s.item} href="#">Message</a></li>
                <li><a className={s.item} href="#">Users</a></li>
                <li><a className={s.item} href="#">News</a></li>
                <li><a className={s.item} href="#">Music</a></li>
                <li><a className={s.item} href="#">Settings</a></li>
            </ul>
        </div>
    )
}
export default Navbar;