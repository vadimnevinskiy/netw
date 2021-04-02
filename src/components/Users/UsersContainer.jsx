import React from "react";
import Users from "./Users";
import {compose} from "redux";
import {connect} from "react-redux";
import {requestUsers} from "../../redux/users-reducer";
import {
    getCurrentPage,
    getIsFetching,
    getTotalUsersCount,
    getUsers,
    getUsersCountPerPage
} from "../../redux/user-selector";
import Preloader from "../common/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.usersCountPerPage);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.usersCountPerPage);

    }

    render() {
        return (
            <>
                {
                    this.props.isFetching
                        ? <>
                            <Preloader/>
                            <Users
                                {...this.props}
                            />
                        </>
                        : <Users
                            {...this.props}
                            onPageChanged={this.onPageChanged}
                        />
                }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalCount: getTotalUsersCount(state),
        usersCountPerPage: getUsersCountPerPage(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        requestUsers: requestUsers
    })
)(UsersContainer);
