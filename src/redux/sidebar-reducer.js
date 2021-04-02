import {menuAPI} from "../api/api";

const SET_MENU = 'SET_MENU';

let initialState = {
    menu: []
}

const sidebarReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_MENU:
            return {
                ...state,
                menu: action.menu
            }
        default:
            return state;
    }
}

const setMenu = (menu) => {
    return {
        type: SET_MENU,
        menu: menu
    }
}

export const getMenu = () => (dispatch) => {
    let menu = [
        {id: 0, title: 'Profile', icon: 'face', link: '/profile'},
        {id: 1, title: 'Users', icon: 'supervisor_account', link: '/users'},
        {id: 2, title: 'Dialogs', icon: 'textsms', link: '/dialogs'}
    ]
    dispatch(setMenu(menu))
}


export default sidebarReducer;
