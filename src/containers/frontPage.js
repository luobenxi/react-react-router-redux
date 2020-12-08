import React from 'react'
import {Pagination, Table} from 'antd'
import './frontPage.less'

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: '添加时间',
        dataIndex: 'addTime',
        key: 'addTime',
    }
]

class Mock extends React.Component {

	state = {
	    allList: [], // 所有数据
        columns,
        itemList: [], // 当前页数据
        page: {
            current: 1, // 当前页
            pageSize: 10, // 页大小
            pageTotals: 0, // 总页数
            total: 0, // 总记录数
        }
	}

    initData() {
        let url = '/api/user/getPageList?pageSize=25'
        fetch(url).then(res => {
            let {ok, status, url, statusText} = res
            if (ok && status === 200) {
                return res.json()
            } else {
                return `${url} ${statusText} ${status}`
            }
        }).then(res => {
            let {code, data, msg} = res
            if (code === 0) {
                console.log('--接口数据--', data)
                let itemList = data.itemList.slice(0, this.state.page.pageSize) // slice不会改变原数组
                let pageTotals = Math.ceil(data.page.total / this.state.page.pageSize)
                let total = data.page.total
                let page = {
                    current: 1,
                    pageSize: 10,
                    pageTotals,
                    total,
                }
                this.setState({
                    allList: data.itemList,
                    itemList,
                    page
				})
            } else {
                console.log(msg)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    getSliceEndIndex() {
        let {total, current, pageSize} = this.state.page
        let start = pageSize * (current - 1)
        let endTemp = start + pageSize
        return endTemp < total ? endTemp : total
    }

    renderItemList() {
        let {allList, page} = this.state
        let start = page.pageSize * (page.current - 1)
        let end = this.getSliceEndIndex()
        let itemList = allList.slice(start, end)
        console.log(start, end, itemList)
        this.setState({
            itemList
        })
    }

    componentDidMount() {
        this.initData()
    }

    render() {
	    let {itemList, page} = this.state
        let {current, total} = page
        const TableProps = {
            bordered: true,
            pagination: false,
            dataSource: itemList,
            columns,
            rowKey: 'id'
        }
        const PaginationProps = {
            current,
            total,
            className: 'Pagination',
            onChange: (pageIndex, pageSize) => {
                page.current = pageIndex
                this.setState({
                    page
                }, () => {
                    this.renderItemList()
                })
            }
        }
        return (
            <div className="page-box">
                <p>前端分页</p>
                <Table {...TableProps} />
                <Pagination {...PaginationProps} />
            </div>
        )
    }
}

export default Mock
