import React from 'react';
import {Form, Field} from 'react-final-form';
import classes from './Profile.module.css';
import avatar from '../../assets/img/avatar.png';
import Status from "./Status/Status";

import fb from "../../assets/img/fb.png";
import vk from "../../assets/img/vk.png";
import youtube from "../../assets/img/youtube.png";
import github from "../../assets/img/github.png";
import website from "../../assets/img/website.png";
import twitter from "../../assets/img/twitter.png";
import link from "../../assets/img/link.png";
import Contacts from "./Contacts/Contacts";


const Profile = (props) => {


    return (
        <div className={classes.profile}>
            <div className={classes.userPhoto}>
                <div className={classes.photo}>
                    {
                        props.profile.photos.small
                        ? <img src={props.profile.photos.small} alt=""/>
                        : <img src={avatar} alt=""/>
                    }

                </div>
                <Status/>
                {
                    props.profile.lookingForAJob
                        ? <div className={classes.workStatus + ' ' + classes.redStatus}>
                            Не ищу работу!
                        </div>
                        : <div className={classes.workStatus + ' ' + classes.greenStatus}>
                            Открыт к предложениям!
                        </div>

                }
            </div>
            <div className={classes.userName}>
                {props.profile.fullName}
            </div>
            <div className={classes.info}>
                {props.profile.lookingForAJobDescription}
            </div>


            <Contacts contacts={props.profile.contacts}/>
        </div>
    )
}
export default Profile;
