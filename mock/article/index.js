let common = require('../common.js');
let Mock = require("mockjs");
let express = require("express");
let router = express.Router();

router.use("/getPageList", function (req, res) {
    // 调用mock方法模拟数据
    let itemList = Mock.mock({
        'itemList|10': [{
            'id|+1': 1,
            'title': '@ctitle',
            'status|0-3': 1,
            'addTime': '2019-10-8 15:20:30'
        }],
        'page': {
            'pageIndex': 1,
            'pageSize': 10,
            'total': 100
        }
    });
    let data = common.AjaxJson(itemList);
    return res.json(data);
});

router.use('/save', (req, res) => {
    let data = common.AjaxJson(null, '保存成功！');
    return res.json(data);
});

router.use('/delete', (req, res) => {
    let data = common.AjaxJson(null, '删除成功！');
    return res.json(data);
});

module.exports = router;