import React from 'react';

class Home extends React.Component {

    initData() {
        let url = '/api/v1/Student/getPageList';
        fetch(url).then(res => {
            let {ok, status, url, statusText} = res;
            if (ok && status === 200) {
                return res.json();
            } else {
                return `${url} ${statusText} ${status}`;
            }
        }).then(res => {
            let {code, data, msg} = res;
            if (code === 0) {
                console.log(data);
            } else {
                console.log(msg);
            }
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidMount() {
        // this.initData();
    }

    render() {
        return (
            <div>
                Home
            </div>
        );
    }
}

export default Home;