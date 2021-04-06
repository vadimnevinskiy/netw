import React from "react";
import Profile from "./Profile";
import {compose} from "redux";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader";
import {withRouter} from "react-router-dom";
import {
    getMyIdFromSelector,
    getProfileFromSelector,
    getStatusFromSelector
} from "../../redux/profile-selector";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 15557;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        if (!this.props.profile) {
            return <Preloader/>
        } else {
            return (
                <Profile myId={this.props.myId} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
            );
        }
    }
}

let mapStateToProps = (state) => {
    return {
        profile: getProfileFromSelector(state),
        status: getStatusFromSelector(state),
        myId: getMyIdFromSelector(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        getProfile: getProfile,
        getStatus: getStatus,
        updateStatus: updateStatus
    }),
    withRouter
)(ProfileContainer)


// export default ProfileContainer;
