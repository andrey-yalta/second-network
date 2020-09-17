import React from "react";
import s from "../Dialogs.module.css"




const Message = (props) =>{
    return(
        <div  className={s.message}>{props.message}</div>
    )
}

let messages = [
    {id:1,message:"hello"},
    {id:2,message:"WHats up?"},
    {id:3,message:"How is your name?"},
    {id:4,message:"bla bla bla"},
    {id:5,message:"Yo"},
    {id:6,message:"Hello from Yata with love"},
]


let messageElements = messages.map(m=> <Message message={m.message} id={m.id}/>);


export default messageElements;