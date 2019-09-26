import {
    USER_LIST,
    USER_LIST_ASYNC,
} from '../action-type';

const initialState = {
    userList: [],
    userListAsync: [],
};

export default (state = initialState, action) => {
    switch(action.type) {
        case USER_LIST: {
            return Object.assign({}, state, { userList: action.data });
        }
        case USER_LIST_ASYNC: {
            return Object.assign({}, state, { userListAsync: action.data });
        }
        default: {
            return Object.assign({}, state);
        }
    }
};
