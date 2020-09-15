import style from "./Header.module.css";
import React from "react";

const Header = ()=>{
    return(
        <div >
            <nav className={style.navigate}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li> <a href="#">Message</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;