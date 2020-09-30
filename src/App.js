import React from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App =(props)=>{
    // debugger;
  return(

      <BrowserRouter>    {/* короче это библиотека которая позволяет менять url адресс */}
      <div className="main">
         <HeaderContainer/>
         <Navbar/>
          <div className="content" >
              {/*<Route path={"/profile"} component ={Profile}/>    /!* меняет url на profile и отрисовывает компоненту профайл *!/*/}
              {/*<Route path={"/dialogs"} component={Dialogs}/>*/}

              <Route path={"/profile/:userId?"} render={ ()=> <ProfileContainer /> }/> {/* мы используем рендер чтобы вызывать компоненту как тег чтобы можно было прокинуть пропсы*/}
              <Route path={"/dialogs"} render={ ()=> <DialogsContainer  /> }/>
              <Route path={"/users"} render={ ()=> <UsersContainer  /> }/>
              <Route path={"/login"} render={ ()=> <Login  /> }/>

          </div>
      </div>
      </BrowserRouter>

  )
}
export default App;
