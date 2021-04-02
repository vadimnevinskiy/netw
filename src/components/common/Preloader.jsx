import React from "react";
import classes from './Preloader.module.css';
import preloader from '../../assets/img/preloader.gif';


const Preloader = () => {
    return (
        <div className={classes.preloaderBlock}>
            <div className={classes.preloader}>
                <img src={preloader} alt=""/>
            </div>
        </div>
    )
}

export default Preloader;
