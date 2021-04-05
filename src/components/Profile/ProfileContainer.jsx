import React from "react";
import Profile from "./Profile";
import {compose} from "redux";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 15557;
        }
        this.props.getProfile(userId)
    }

    render() {
        if (!this.props.profile) {
            return <Preloader/>
        } else {
            return (
                <Profile profile={this.props.profile} />
            );
        }
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default compose(
    connect(mapStateToProps, {
        getProfile: getProfile
    }),
    withRouter
)(ProfileContainer)


// export default ProfileContainer;
