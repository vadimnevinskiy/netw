import {userAPI} from "../api/api";

const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';


let initialState = {
    users: [],
    totalCount: 0,
    usersCountPerPage: 10,
    currentPage: 1,
    isFetching: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

const setIsFetching = (value) => {
    return {
        type: SET_IS_FETCHING,
        isFetching: value
    }
}
const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}
const setTotalCount = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount: totalCount
    }
}
const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}


export const requestUsers = (pageNum, count) => (dispatch) => {
    dispatch(setIsFetching(true));
    userAPI.getUsers(pageNum, count)
        .then(data => {
            dispatch(setIsFetching(false));
            dispatch(setCurrentPage(pageNum));
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
        })
}
export default userReducer;
