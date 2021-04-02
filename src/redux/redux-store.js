import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import sidebarReducer from "./sidebar-reducer";
import userReducer from "./users-reducer";
import profileReducer from "./profile-reducer";




let reducer = combineReducers({
    sidebar: sidebarReducer,
    userPage: userReducer,
    profilePage: profileReducer
});


let store = createStore(reducer, applyMiddleware(thunkMiddleware))

export default store;
