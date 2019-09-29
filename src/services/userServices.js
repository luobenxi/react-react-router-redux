import ajax from '../axios';

const getUserPageList = data => ajax.ajax({
    url: `api/v1/Student/getPageList`,
    type: 'POST',
    data: data
});

export default {
    getUserPageList,
};
