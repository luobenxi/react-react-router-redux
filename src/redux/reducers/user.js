import {
    USER_LIST,
    USER_LIST_ASYNC,
    USER_LIST_ASYNC_MOCK,
} from '../action-type';

const initialState = {
    userList: [],
    userListAsync: [],
    userListAsyncMock: [],
};

export default (state = initialState, action) => {
    switch(action.type) {
        case USER_LIST: {
            return Object.assign({}, state, { userList: action.data });
        }
        case USER_LIST_ASYNC: {
            return Object.assign({}, state, { userListAsync: action.data });
        }
        case USER_LIST_ASYNC_MOCK: {
            return Object.assign({}, state, { userListAsyncMock: action.data });
        }
        default: {
            return Object.assign({}, state);
        }
    }
};
