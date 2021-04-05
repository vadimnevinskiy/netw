import {authAPI} from "../api/api";

const SET_MY_PROFILE = 'SET_MY_PROFILE';



let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captcha: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MY_PROFILE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
    return state
}


const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_MY_PROFILE,
        payload: {
            userId,
            email,
            login,
            isAuth
        },
    }
}

export const authMe = () => (dispatch) => {
    authAPI.authMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    let data = await response;
    if (data.data.resultCode === 0) {
        dispatch(authMe());
    } else if (data.data.resultCode === 10) {
        console.log(data.data.resultCode)
        // dispatch(getCaptcha());
        // return {[FORM_ERROR]: data.data.messages[0]};
    } else {
        console.log(data.data.resultCode)
        // return {[FORM_ERROR]: data.data.messages[0]};
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    let data = await response;
    if (data.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false, null));
    }
}

export default authReducer;
