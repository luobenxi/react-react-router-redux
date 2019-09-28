import React from 'react';

class MyList extends React.Component {

    componentDidMount() {
        console.log(this.props.name);
    }

    render() {
        return (
            <div>
                {this.props.name}
                {this.props.children}
            </div>
        );
    }
}

export default MyList;