import React from "react";
import s from "./Users.module.css"
import userIcon from "./../../common/img/userIcon.png"


const Users =(props)=>{
   let setState =()=>{
       debugger;
       if (props.usersPage.users.length ===0){
           props.setUsers( [
               {id:1, fullName:"Dimych", follow:true, status:"hello world", location:{city:"Minsk", country:"Belarus"}},
               {id:2, fullName:"Ivan", follow:false, status:"yo yo oy world", location:{city:"Kiev", country:"Ukraine"}},
               {id:3, fullName:"Marina", follow:true, status:"i'm sexy and i know it", location:{city:"Yalta", country:"Russia"}},
           ]);
       }
   }

    return(

        <div> <button onClick={setState}>setUsers</button> {props.usersPage.users.map(u=>(<div className={s.userItem} key={u.id}>
            <h3>{u.fullName}</h3><img src={userIcon} alt=""/>
            <br/>
            <span>{u.status}</span>
            <br/>
            <span>{u.location.city}</span>
            <br/>
            <span>{u.location.country}</span><br/>
            <span>{u.id}</span>
            <br/>
            {u.follow ? <button onClick={()=>{props.unFollow(u.id)}}>unfollow</button> : <button onClick={()=>{props.follow(u.id)}}> follow</button>}

        </div>))}</div>
    )
}
export default Users;