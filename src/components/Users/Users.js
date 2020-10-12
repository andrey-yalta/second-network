import React from "react";
import Paginator from "./Paginator";
import User from "./User";

const Users =(props)=>{
    // здесь не совсем понятный bind - сделал сам, попозже можно будет подумать
        return (
            <div>
                <Paginator currentPage={props.currentPage} pages={props.pages} onPageChange={props.onPageChange.bind(props)}
                           totalItemsCount={props.totalCount} pageSize={props.pageSize}/>
                <br/>
                {props.usersPage.users.map(u => (<User u={u}  followingInProgress={props.followingInProgress}
                                                       unfollowUsersThunkCreator={props.unfollowUsersThunkCreator}
                />))}
            </div>
        )}
export default Users;