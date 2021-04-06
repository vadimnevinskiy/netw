// profile: state.profilePage.profile,
//     status: state.profilePage.status,
//     myId: state.auth.userId

export const getProfileFromSelector = (state) => {
    return state.profilePage.profile
}
export const getStatusFromSelector = (state) => {
    return state.profilePage.status
}
export const getMyIdFromSelector = (state) => {
    return state.auth.userId
}
