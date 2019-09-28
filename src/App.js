import React from 'react';
import Nav from './components/Nav';

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div>{this.props.children}</div>
            </div>
        );
    }
}

export default App;