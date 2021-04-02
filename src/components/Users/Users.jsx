import React from 'react';
import classes from './Users.module.css';
import avatar from '../../assets/img/avatar.png'


const Users = (props) => {

    let pageCount = Math.ceil(props.totalCount / props.usersCountPerPage);
    let pages = [];
    for(let i = 1;  i < pageCount; i++){
        if(pageCount > i && i > (pageCount-10)){
            pages.push(i);
        }
    }


    let page = pages.map(p => {
        if(props.currentPage == p){
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
            <div className={classes.userItem} key={item.id}>
                <div className={classes.userPhoto}>
                    {
                        item.photos.small
                        ? <img src={item.photos.small} alt="" />
                        : <img src={avatar} alt="" />
                    }

                </div>
                <div className={classes.info}>
                    <div className={classes.userName}>
                        {item.name}
                    </div>
                </div>
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
