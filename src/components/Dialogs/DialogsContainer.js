import React from "react";

import UserItem from "./UsersItem/UsersItem";
import Message from "./Messages/Messages";
import {addMessageActionCreator, messageChangedActionCreator} from "../../redux/state";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withRedirectComponent} from "../../hoc/withRedirect";
import {compose} from "redux";

let mapStateToProps =(state)=>{

    let usersElements = state.dialogsPage.users.map(u => <UserItem key={u.id} id={u.id} name={u.name}/>);
       let messageElements = state.dialogsPage.messages.map(m=> <Message key={m.id} message={m.message} id={m.id}/>);
    debugger;
    return{
        dialogsPage: state.dialogsPage,
        usersElements:usersElements,
        messageElements : messageElements,
        value: state.dialogsPage.currentValue,

    }
};
let mapDispatchToProps =(dispatch)=>{
    return{
        sendMessage:()=>{dispatch(addMessageActionCreator())},
        onChange: (messageValue)=>{dispatch(messageChangedActionCreator(messageValue))}
    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps),withRedirectComponent)(Dialogs)