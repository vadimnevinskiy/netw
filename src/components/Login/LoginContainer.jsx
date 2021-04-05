import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import Login from "./Login";
import {Redirect} from "react-router-dom";

class LoginContainer extends React.Component{

    render() {
        console.log(this.props.isAuth)
        if(this.props.isAuth === true){
            return (
                <Redirect to={"/profile"} />
            )
        } else {
            return (
                <Login {...this.props} login={this.props.login} />
            );
        }
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default compose(
    connect(mapStateToProps, {
            login
        }
    )
)(LoginContainer);
