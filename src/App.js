import React from 'react';
import './App.css';
import style from "./Header.module.css"


const App =()=>{
  return(
      <div>
          <Header/>
        <h1>Hello world!</h1>
      </div>
  )

}

export default App;
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