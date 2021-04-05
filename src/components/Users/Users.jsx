import React from 'react';
import classes from './Users.module.css';
import avatar from '../../assets/img/avatar.png'
import {NavLink} from "react-router-dom";
import {followUser} from "../../redux/users-reducer";


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

    const follow = (userId) => {
        props.followUser(userId);
    }

    let user = props.users.map(item => {
        return (
            <div className={classes.userItem} key={item.id}>
                <NavLink to={'/profile/' + item.id} className={classes.userItemLink}>
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
                </NavLink>
                {
                    props.isAuth &&
                    <div className={classes.userAddBtn}>
                        {
                            item.followed
                                ? <span className={classes.removeUser + ' ' + 'material-icons'}>clear</span>
                                : <span className={classes.addUser + ' ' + 'material-icons'} onClick={() => {props.followUser(item.id)}}>add</span>
                        }
                    </div>
                }
            </div>

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
