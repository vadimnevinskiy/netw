import React from "react";
import Profile from "./Profile";
import {compose} from "redux";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader";

class ProfileContainer extends React.Component{
    componentDidMount() {
      this.props.getProfile(20)
    }

    render() {
        if(!this.props.profile){
            return <Preloader />
        }else{
            return (
                <Profile {...this.props} />
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
    })
)(ProfileContainer)


// export default ProfileContainer;
