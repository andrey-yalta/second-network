import React from "react";
import s from "./Users.module.css"

import Users from "./Users";
import PreloaderImg from "../../common/img/circles.svg";

import {usersAPI} from "../../api/api";


class UsersAPIContainer extends React.Component {

    componentDidMount() {

        // это уже санка
        this.props.setUsersThunkCreator(this.props.currentPage, this.props.pageSize);

    }

    //в компоненте снизу можно обращатся к функциям через this напрямую, потому что в рендере Users мы раскукожили props
    onPageChange(p) {
        this.changeCurrentPage(p)
        this.toggleIsFetching(true);

        usersAPI.getUsers(p, this.pageSize)
            .then(data => {
                this.setUsers(data.items)
                //тогл это короче начало и конец анимации
                this.toggleIsFetching(false);
            })

    }

    paginator() {
    }

    render() {

        let pages = [];
        //*захардкодил число страниц - потом надо будет сделать нормально*
        for (let i = 1; i < 40; i++) {
            pages.push(i);
        }

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