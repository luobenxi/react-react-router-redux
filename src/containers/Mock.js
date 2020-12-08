import React from 'react';

class Mock extends React.Component {
	
	state = {
		itemList: []
	};

    initData() {
        let url = '/api/user/getPageList';
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
				this.setState({
					itemList: data.itemList
				});
            } else {
                console.log(msg);
            }
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidMount() {
        this.initData();
    }

    render() {
        return (
            <div>
                <p>Mock数据</p>
				<ul>
                    {
                        this.state.itemList.map((item, index) =>
                            <li key={item.id}>{index + 1}、{item.name}</li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default Mock;