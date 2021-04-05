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
            {
                props.contacts.facebook
                ? <a href={props.contacts.facebook} target="_blank"><img src={fb} alt=""/></a>
                : <span className={classes.disabled}><img src={fb} alt=""/></span>
            }
            {
                props.contacts.vk
                ? <a href={props.contacts.vk} target="_blank"><img src={vk} alt=""/></a>
                : <span className={classes.disabled}><img src={vk} alt=""/></span>
            }
            {
                props.contacts.youtube
                ? <a href={props.contacts.youtube} target="_blank"><img src={youtube} alt=""/></a>
                : <span className={classes.disabled}><img src={youtube} alt=""/></span>
            }
            {
                props.contacts.github
                ? <a href={props.contacts.github} target="_blank"><img src={github} alt=""/></a>
                : <span className={classes.disabled}><img src={github} alt=""/></span>
            }
            {
                props.contacts.website
                ? <a href={props.contacts.website} target="_blank"><img src={website} alt=""/></a>
                : <span className={classes.disabled}><img src={website} alt=""/></span>
            }
            {
                props.contacts.twitter
                ? <a href={props.contacts.twitter} target="_blank"><img src={twitter} alt=""/></a>
                : <span className={classes.disabled}><img src={twitter} alt=""/></span>
            }
            {
                props.contacts.mainLink
                ? <a href={props.contacts.mainLink} target="_blank"><img src={link} alt=""/></a>
                : <span className={classes.disabled}><img src={link} alt=""/></span>
            }



        </div>
    )
}

export default Contacts;
