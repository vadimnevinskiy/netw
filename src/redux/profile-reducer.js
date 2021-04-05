import {profileAPI} from "../api/api";

const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
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

const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status: status
    }
}



export const getProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setProfile(data));
        })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data));
        })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
}

export default profileReducer;
