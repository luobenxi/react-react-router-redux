import React from 'react';
import { connect } from 'react-redux';
import { getUserList, getUserListAsync } from '../redux/action/user'

@connect(
    state => ({
        userList: state.user.userList,
        userListAsync: state.user.userListAsync,
    }),
    {
        getUserList,
        getUserListAsync,
    }
)

class Test extends React.Component {

    componentDidMount() {
        let data = [
            {
                id: 1,
                name: '罗本习'
            },
            {
                id: 2,
                name: '哈哈哈'
            }
        ];
        this.props.getUserList(data);

        let data2 = Array.from(data);
        data2.push({
            id: 3,
            name: 'XXX'
        });
        this.props.getUserListAsync(data2);
    }

    render() {
        return (
            <div>
                <p>React全家桶Demo（React+React-Router+Redux）</p>
                <div>同步</div>
                <ul>
                    {
                        this.props.userList.map(item =>
                            <li key={item.id}>{item.name}</li>
                        )
                    }
                </ul>
                <br />
                <div>异步（Ajax）</div>
                <ul>
                    {
                        this.props.userListAsync.map(item =>
                            <li key={item.id}>{item.name}</li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default Test;