import React from 'react';
import classes from './Users.module.css';
import avatar from '../../assets/img/avatar.png'
import {NavLink} from "react-router-dom";


const Users = (props) => {

    let pages = [];
    let current = props.currentPage;
    let pageCount = Math.ceil(props.totalCount / props.usersCountPerPage);

    for (let i = 1; i <= pageCount; i++) {
        if (pageCount > i && i > (pageCount - 10)) {
            pages.push(i);
        }
    }




    let page = pages.map(p => {
        if (props.currentPage == p) {
            return (
                <span key={p} className={classes.active}>{p}</span>
            )
        } else {
            return (
                <span key={p}
                      onClick={(e) => {
                          props.onPageChanged(p)
                      }}
                >{p}</span>
            )
        }

    })

    let user = props.users.map(item => {
        return (
            <NavLink to={'/profile/' + item.id} key={item.id}  className={classes.userItemLink}>
                <div className={classes.userItem}>
                    <div className={classes.userPhoto}>
                        {
                            item.photos.small
                                ? <img src={item.photos.small} alt=""/>
                                : <img src={avatar} alt=""/>
                        }

                    </div>
                    <div className={classes.info}>
                        <div className={classes.userName}>
                            {item.name}
                        </div>
                    </div>
                </div>
            </NavLink>
        )
    })
    return (
        <div>
            <div className={classes.paginator}>
                {page}
            </div>
            <div className={classes.users}>
                {user}
            </div>
        </div>
    )
}
export default Users;
