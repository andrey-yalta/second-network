import React, {Component} from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {initializeApp} from "./redux/app-reducer";


class App extends Component{
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized){
            return <div>loadig...</div>
        }

        return(
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
        )
    }

}
const mapStateToProps=(state)=>{
    return{
    initialized:state.app.initialized,
    };
}
export default  connect(mapStateToProps,{initializeApp})(App)
// export  default compose(withRouter, connect(null,{getAuthUserData}))(App)
