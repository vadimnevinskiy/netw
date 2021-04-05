import React from 'react';
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {logout} from "../../redux/auth-reducer";

const Header = (props) => {
    let logout = () => {
        props.logout()
    }
    return (
        <div className={classes.headerContainer}>
            <div className={classes.header}>
                {
                    props.login
                        ? <span>
                            <span
                                className={classes.loginIcon + ' ' + "material-icons"}
                                onClick={logout}
                            >exit_to_app</span>
                            {props.login}
                    </span>
                        : <NavLink to={'/login'}>
                            <span
                                className={classes.loginIcon + ' ' + "material-icons"}
                            >exit_to_app</span>
                            <span className={classes.loginLink}>Login</span>
                        </NavLink>
                }

            </div>
        </div>
    )
}

export default Header;
