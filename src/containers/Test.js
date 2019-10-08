import React from 'react';
import { connect } from 'react-redux';
import { getUserList, getUserListAsync, getUserListAsyncMock } from '../redux/actions/user';
import MyList from "../components/MyList";

@connect(
    state => ({
        // userList: state.user.userList,
        // userListAsync: state.user.userListAsync,
        // userListAsyncMock: state.user.userListAsyncMock,
        ...state.user
    }),
    {
        getUserList,
        getUserListAsync,
        getUserListAsyncMock,
    }
)

class Test extends React.Component {

    state = {
        items: [
            {
                id: 1,
                name: '罗本习'
            },
            {
                id: 2,
                name: '哈哈哈'
            }
        ],
        name: '',
        current_page: 1,
        per_page: 10
    };

    componentDidMount() {
        let data = this.state.items;
        this.props.getUserList(data);

        this.getPageUserList().then(res => {
            console.log(res);
            // this.props.getUserListAsyncMock();
        });
    }

    getPageUserList() {
        let params = {
            per_page: this.state.per_page,
            current_page: this.state.current_page,
            name: this.state.name
        };
        return this.props.getUserListAsync(params);
    }

    changeText(e) {
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
    }

    render() {
        return (
            <div>
                <MyList name="123">
                    <div>children</div>
                </MyList>
                <p>React全家桶Demo（React+React-Router+Redux）</p>
                <div>同步</div>
                <ul>
                    {
                        this.props.userList.map((item, index) =>
                            <li key={item.id}>{index + 1}、{item.name}</li>
                        )
                    }
                </ul>
                <br />
                <div>异步本地接口（Ajax）</div>
                <div>
                    当前页
                    <input type="text" name="current_page" value={this.state.current_page} placeholder="请输入当前页" onChange={this.changeText.bind(this)} />
                </div>
                <div>
                    页大小
                    <input type="text" name="per_page" value={this.state.per_page} placeholder="请输入页大小" onChange={this.changeText.bind(this)} />
                </div>
                <div>
                    关键字
                    <input type="text" name="name" value={this.state.name} placeholder="请输入姓名" onChange={this.changeText.bind(this)} />
                </div>
                <button onClick={this.getPageUserList.bind(this)}>查询</button>
                <div>（共{this.props.userListAsync.length}条记录）</div>
                <ul>
                    {
                        this.props.userListAsync.map((item, index) =>
                            <li key={item.id}>{index + 1}、{item.name}</li>
                        )
                    }
                </ul>
                <br />
                <div>异步Mock接口（Ajax）</div>
                <div>（共{this.props.userListAsyncMock.length}条记录）</div>
                <ul>
                    {
                        this.props.userListAsyncMock.map((item, index) =>
                            <li key={item.id}>{index + 1}、{item.name}</li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default Test;