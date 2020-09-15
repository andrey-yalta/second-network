import React from "react";
import s from "./Navbar.module.css"

const Navbar =()=> {
    return(
        <div className={s.sidebar} >
            <ul>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Message</a></li>
                <li><a href="#">Users</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </div>
    )
}
export default Navbar;