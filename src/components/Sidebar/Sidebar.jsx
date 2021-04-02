import React, {useEffect, useState} from 'react';
import classes from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    let menu = props.menu.map(item => {
        return (
            <NavLink to={item.link} activeClassName={classes.active} key={item.id}>
                <span className={classes.navIcon + ' ' + "material-icons"}>{item.icon}</span>
                {item.title}
            </NavLink>
        )
    })
    return (
        <div className={classes.sidebar}>
            <nav className={classes.nav}>
                {menu}
            </nav>
        </div>
    )
}
export default Sidebar;
