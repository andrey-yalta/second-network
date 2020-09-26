import React from "react";
import s from "./Users.module.css"
import userIcon from "./../../common/img/userIcon.png"
import * as axios from "axios"
import Users from "./Users";
import PreloaderImg from "../../common/img/circles.svg";
import {toggleIsFetching} from "../../redux/users-reducer";


class UsersAPIContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger;
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.toggleIsFetching(false);
            })
        debugger;
    }

    //в компоненте снизу можно обращатся к функциям через this напрямую, потому что в рендере Users мы раскукожили props
    onPageChange(p) {
        this.changeCurrentPage(p)
        this.toggleIsFetching(true);
        debugger;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.pageSize}`)
            .then(response => {
                this.setUsers(response.data.items)
                this.toggleIsFetching(false);
            })
        debugger;
    }

    paginator() {
    }

    render() {
        let pageCount = this.props.totalCount / this.props.pageSize
        let pages = [];
        {/*захардкодил число страниц - потом надо будет сделать нормально*/
        }
        for (let i = 1; i < 40; i++) {
            pages.push(i);
        }
        debugger;
        if (this.props.isFetching) {
            console.log("fetching true")
            return (<div>Loading... <br/><img className={s.preloader} src={PreloaderImg} alt=""/></div>)
        } else {
            console.log("fetching false");

            return (

                <Users pages={pages} {...this.props} onPageChange={this.onPageChange}/>
            )
        }
    }
}

export default UsersAPIContainer;