import React from "react";
import classes from './Contacts.module.css';
import fb from "../../../assets/img/fb.png";
import vk from "../../../assets/img/vk.png";
import youtube from "../../../assets/img/youtube.png";
import github from "../../../assets/img/github.png";
import website from "../../../assets/img/website.png";
import twitter from "../../../assets/img/twitter.png";
import link from "../../../assets/img/link.png";


const Contacts = (props) => {
    return (
        <div className={classes.contacts}>
            <a href="#" target="_blank"><img src={fb} alt=""/></a>
            <a href="#" target="_blank"><img src={vk} alt=""/></a>
            <a href="#" target="_blank"><img src={youtube} alt=""/></a>
            <a href="#" target="_blank"><img src={github} alt=""/></a>
            <a href="#" target="_blank"><img src={website} alt=""/></a>
            <a href="#" target="_blank"><img src={twitter} alt=""/></a>
            <a href="#" target="_blank"><img src={link} alt=""/></a>
        </div>
    )
}

export default Contacts;
