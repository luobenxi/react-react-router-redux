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
        // let data = this.state.items;
        // this.props.getUserList(data);

        // this.getPageUserList().then(res => {
            // console.log(res);
            // this.props.getUserListAsyncMock();
        // });
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
            </div>
        );
    }
}

export default Test;