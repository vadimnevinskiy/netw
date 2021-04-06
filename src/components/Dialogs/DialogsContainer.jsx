import React from "react";
import {getMessagesFromSelector, getUsersFromSelector} from "../../redux/dialogs-selector";
import {compose} from "redux";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {requestMessages, requestUsers} from "../../redux/dialogs-reducer";

class DialogsContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers();
        this.props.requestMessages();
    }

    render() {
        return (
            <Dialogs {...this.props} />
        )
    }


}

let mapStateToProps = (state) => {
    return {
        users: getUsersFromSelector(state),
        messages: getMessagesFromSelector(state)
    }
}

export default compose(
    connect(
        mapStateToProps, {
            requestUsers: requestUsers,
            requestMessages: requestMessages
        }
    )
)(DialogsContainer);
