module.exports = {
    AjaxJson: function (data, msg, code) {
        return Object.assign({}, {
            'code': code || 0,
            'msg': msg || '操作成功',
            'data': data || null,
        });
    }
};