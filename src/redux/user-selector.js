

export const getUsers = (state) => {
    return state.userPage.users;
}

export const getTotalUsersCount = (state) => {
    return state.userPage.totalCount;
}

export const getIsFetching = (state) => {
    return state.userPage.isFetching;
}
export const getUsersCountPerPage = (state) => {
    return state.userPage.usersCountPerPage;
}
export const getCurrentPage = (state) => {
    return state.userPage.currentPage;
}
export const getAuth = (state) => {
    return state.auth.isAuth;
}
