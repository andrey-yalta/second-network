import React from "react";
import s from "./Users.module.css"
import userIcon from "./../../common/img/userIcon.png"
import * as axios from "axios"


class Users extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        debugger;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response =>{this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)})
        debugger;
    }
    onPageChange (p){
        this.props.changeCurrentPage(p)
        debugger;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response =>{this.props.setUsers(response.data.items)})
        debugger;
    }
    // let setState =()=>{
    //     debugger;
    //     if (props.usersPage.users.length ===0){
    //         // props.setUsers( [
    //         //     {id:1, fullName:"Dimych", follow:true, status:"hello world", location:{city:"Minsk", country:"Belarus"}},
    //         //     {id:2, fullName:"Ivan", follow:false, status:"yo yo oy world", location:{city:"Kiev", country:"Ukraine"}},
    //         //     {id:3, fullName:"Marina", follow:true, status:"i'm sexy and i know it", location:{city:"Yalta", country:"Russia"}},
    //         // ]);
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{props.setUsers(response.data.items)})
    //         debugger;
    //     }
    // }
    paginator(){



    }
    render() {
        let pageCount = this.props.totalCount /this.props.pageSize
        let pages =[];
        {/*захардкодил число страниц - потом надо будет сделать нормально*/}
        for(let i=1; i<40; i++){
            pages.push(i);
        }
        return (

        <div>

            <div className={s.paginator}>
                {pages.map(p=>(<span className={this.props.currentPage === p && s.active}
                                     key={p.id}
                                     onClick={ ()=>{this.onPageChange(p)}}>
                    {p}</span>))}
            </div>
            <br/>



            {this.props.usersPage.users.map(u => (<div className={s.userItem} key={u.id}>
                <h3>name: {u.name}</h3>
                <img src={u.photos.small ? u.photos.small : userIcon} alt=""/>
                <br/>
                <span>status : {u.status}</span>
                <br/>

                <span>user id: {u.id}</span>
                <br/>
                {u.follow ? <button onClick={() => {
                    this.props.unFollow(u.id)
                }}>unfollow</button> : <button onClick={() => {
                    this.props.follow(u.id)
                }}> follow</button>}

            </div>))}</div>
        )
    }
}
export default Users;