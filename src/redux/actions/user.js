import userServices from '../../services/userServices';
import {
    USER_LIST,
    USER_LIST_ASYNC,
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
};