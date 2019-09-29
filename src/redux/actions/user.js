import userServices from '../../services/userServices';
import {
    USER_LIST,
    USER_LIST_ASYNC,
    USER_LIST_ASYNC_MOCK,
} from '../action-type';

export const getUserList = data => async (dispatch, getState) => {
    dispatch({
        type: USER_LIST,
        data: data
    });
};

export const getUserListAsync = data => async (dispatch, getState) => {
    // 模拟Ajax异步
    // setTimeout(() => {
    //     dispatch({
    //         type: USER_LIST_ASYNC,
    //         data: data
    //     });
    // }, 2000);
    let res = await userServices.getUserPageList(data);
    dispatch({
        type: USER_LIST_ASYNC,
        data: res.data.data
    });
    return res.data;
};

export const getUserListAsyncMock = data => async (dispatch, getState) => {
    let res = await userServices.getUserListMock(data);
    dispatch({
        type: USER_LIST_ASYNC_MOCK,
        data: res.data
    });
    return res.data;
};