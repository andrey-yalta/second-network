import React from "react";
import s from "./Users.module.css"
import userIcon from "./../../common/img/userIcon.png"
import * as axios from "axios"
import Users from "./Users";


class UsersAPIContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
        debugger;
    }

    onPageChange(p) {
        this.props.changeCurrentPage(p)
        debugger;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
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
        return (
            <Users pages={pages} {...this.props} onPageChange={this.onPageChange} />
        )
    }
}

export default UsersAPIContainer;