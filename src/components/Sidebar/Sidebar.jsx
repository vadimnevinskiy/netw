import React from 'react';
import classes from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <nav className={classes.nav}>
                <NavLink to={'/profile'} activeClassName={classes.active}>
                    <span className={classes.navIcon + ' ' + "material-icons"}>face</span>
                    Profile
                </NavLink>
                <NavLink to={'/users'} activeClassName={classes.active}>
                    <span className={classes.navIcon + ' ' + "material-icons"}>supervisor_account</span>
                    Users
                </NavLink>
                <NavLink to={'/dialogs'} activeClassName={classes.active}>
                    <span className={classes.navIcon + ' ' + "material-icons"}>textsms</span>
                    Dialogs
                </NavLink>
            </nav>
        </div>
    )
}
export default Sidebar;
