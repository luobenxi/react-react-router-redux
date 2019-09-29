import ajax from '../axios';
import { BASE_URL } from '../redux/action-type';

const getUserPageList = data => ajax.ajax({
    url: `api/v1/Student/getPageList`,
    type: 'POST',
    data: data
});

const getUserListMock = data => ajax.ajax({
    url: `${BASE_URL}/User/getList`,
    type: 'GET',
});

export default {
    getUserPageList,
    getUserListMock,
};
