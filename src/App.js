import React from 'react';
import './App.css';
import profileBackground from "./profile.jpeg"
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";






const App =(props)=>{
    debugger;
  return(
      <BrowserRouter>    {/* короче это библиотека которая позволяет менять url адресс */}
      <div className="main">
         <Header/>
         <Navbar/>
          <div className="content" >
              {/*<Route path={"/profile"} component ={Profile}/>    /!* меняет url на profile и отрисовывает компоненту профайл *!/*/}
              {/*<Route path={"/dialogs"} component={Dialogs}/>*/}

              <Route path={"/profile"} render={ ()=> <Profile postPage={props.state.profilePage} dispatch={props.dispatch}/>  }/>  {/* мы используем рендер чтобы вызывать компоненту как тег чтобы можно было прокинуть пропсы*/}
              <Route path={"/dialogs"} render={ ()=> <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} /> }/>

          </div>
      </div>
      </BrowserRouter>
  )
}
export default App;
