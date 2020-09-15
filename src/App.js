import React from 'react';
import './App.css';
import profileBackground from "./profile.jpeg"
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App =()=>{
  return(
      <div className="main">
         <Header/>
         <Navbar/>
          <div className="content" >
              <Profile/>
          </div>
      </div>
  )
}
export default App;
