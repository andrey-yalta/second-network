import React from 'react';
import './App.css';
import icon from "./vk.png"
import profileBackground from "./profile.jpeg"



const App =()=>{
  return(
      <div className={"main"}>
         <header>
             <img src={icon} alt="network"/>
         </header>
          <div className={"sidebar"} >
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Message</a></li>
                    <li><a href="#">Users</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
          </div>
          <div className={"content"} >
              <img src={profileBackground} alt="prfile"/>
          </div>
      </div>
  )

}

export default App;
