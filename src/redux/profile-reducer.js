import {profileAPI} from "../api/api";

const SET_PROFILE = 'SET_PROFILE';

let initialState = {
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;

    }
}


const setProfile = (profile) => {
    return {
        type: SET_PROFILE,
        profile: profile
    }
}



export const getProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setProfile(data));
        })
}

export default profileReducer;
