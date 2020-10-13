import React, {Component, Suspense} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {WithSuspenceComponent} from "./hoc/withSuspence";
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

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
                        <Route path={"/profile/:userId?"} render={
                            WithSuspenceComponent(ProfileContainer)
                        }/>


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
