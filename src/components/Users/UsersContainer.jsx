import React from "react";
import Users from "./Users";
import {compose} from "redux";
import {connect} from "react-redux";
import {followUser, requestUsers} from "../../redux/users-reducer";
import {
    getAuthFromSelector,
    getCurrentPageFromSelector,
    getIsFetchingFromSelector,
    getTotalUsersCountFromSelector,
    getUsersCountPerPageFromSelector,
    getUsersFromSelector
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
                            isAuth={this.props.isAuth}
                            followUser={this.props.followUser}
                        />
                }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersFromSelector(state),
        totalCount: getTotalUsersCountFromSelector(state),
        usersCountPerPage: getUsersCountPerPageFromSelector(state),
        currentPage: getCurrentPageFromSelector(state),
        isFetching: getIsFetchingFromSelector(state),
        isAuth: getAuthFromSelector(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        requestUsers: requestUsers,
        followUser: followUser
    })
)(UsersContainer);
