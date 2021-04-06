
let SET_USERS = 'SET_USERS';
let SET_MESSAGES = 'SET_MESSAGES';

let initialState = {
    users: [],
    messages: []
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_MESSAGES:
            return {
                ...state,
                messages: action.messages
            }
        default:
            return state
    }
}


const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

const setMessages = (messages) => {
    return {
        type: SET_MESSAGES,
        messages: messages
    }
}

export const requestUsers = () => (dispatch) => {
    dispatch(setUsers([
        {id: 0, name: 'Anna'},
        {id: 1, name: 'Alla'},
        {id: 2, name: 'Nina'},
        {id: 3, name: 'Vera'}
    ]));
}
export const requestMessages = () => (dispatch) => {
    dispatch(setMessages([
        {id: 0, text: 'Lorem ipsum dolor sit amet.'},
        {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
        {id: 2, text: 'Lorem ipsum dolor.'},
        {id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, modi?'}
    ]));
}


export default dialogsReducer;
