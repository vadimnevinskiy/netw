import React from 'react';
import classes from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <nav className={classes.nav}>
                <a href="#"><span className={classes.navIcon + ' ' + "material-icons"}>person_outline</span>Profile</a>
                <a href="#" className={classes.active}><span className={classes.navIcon + ' ' + "material-icons"}>people_outline</span>Users</a>
                <a href="#"><span className={classes.navIcon + ' ' + "material-icons"}>mail</span>dialogs</a>
            </nav>
        </div>
    )
}
export default Sidebar;
