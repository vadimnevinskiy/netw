import React from "react";
import Header from "./Header";
import {compose} from "redux";
import {connect} from "react-redux";
import {authMe, logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        login: state.auth.login
    }
}
export default compose(
    connect(mapStateToProps, {
        authMe: authMe,
        logout: logout
    }),
)(HeaderContainer);


