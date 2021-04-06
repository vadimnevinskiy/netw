import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {

    let userItem = props.users.map(item => {
        return (
            <NavLink key={item.id} to={'/dialogs/' + item.id} activeClassName={classes.active}>
                <span className={classes.userItem}>{item.name}</span>
            </NavLink>
        )
    })


    let messageItem = props.messages.map(item => {
        return (
            <div key={item.id} className={classes.messageItem}>
                {item.text}
            </div>
        )
    })
    return (
        <div className={classes.dialogs}>
            <div className={classes.usersList}>
                {userItem}
            </div>
            <div className={classes.messagesList}>
                {messageItem}
            </div>

        </div>
    )
}
export default Dialogs;
