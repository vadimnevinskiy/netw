

export const getUsersFromSelector = (state) => {
    return state.userPage.users;
}

export const getTotalUsersCountFromSelector = (state) => {
    return state.userPage.totalCount;
}

export const getIsFetchingFromSelector = (state) => {
    return state.userPage.isFetching;
}
export const getUsersCountPerPageFromSelector = (state) => {
    return state.userPage.usersCountPerPage;
}
export const getCurrentPageFromSelector = (state) => {
    return state.userPage.currentPage;
}
export const getAuthFromSelector = (state) => {
    return state.auth.isAuth;
}
