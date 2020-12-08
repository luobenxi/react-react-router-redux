let common = require('../common.js');
let Mock = require("mockjs");
let express = require("express");
let router = express.Router();

router.use("/getPageList", function (req, res) {
    let pageSize = req.query.pageSize || 10
    pageSize = parseInt(pageSize)
    // 调用mock方法模拟数据
    let itemList = Mock.mock({
        [`itemList|${pageSize}`]: [{
            'id|+1': 1,
            'name': '@cname',
            'sex|1-2': 1,
            'status|0-2': 1,
            'addTime': '@datetime'
        }],
        'page': {
            'pageIndex': 1,
            'pageSize': pageSize,
            'total': pageSize
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
