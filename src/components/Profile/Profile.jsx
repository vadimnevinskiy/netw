import React from 'react';
import classes from './Profile.module.css';
import avatar from '../../assets/img/avatar.png';
import Status from "./Status/Status";

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
                <Status myId={props.myId} userId={props.profile.userId} status={props.status} updateStatus={props.updateStatus}/>
                {
                    props.profile.lookingForAJob
                        ? <div className={classes.workStatus + ' ' + classes.greenStatus}>
                            Открыт к предложениям!
                        </div>
                        : <div className={classes.workStatus + ' ' + classes.redStatus}>
                            Не ищу работу!
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
