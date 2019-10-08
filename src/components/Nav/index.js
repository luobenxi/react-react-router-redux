import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {

    render() {
        return (
            <div>
                <Link to="/home">首页</Link>
                <span> | </span>
                <Link to="/about">关于我们</Link>
                <span> | </span>
                <Link to="/mock">mock数据</Link>
                <span> | </span>
                <Link to="/test">测试</Link>
            </div>
        );
    }
}

export default Nav;