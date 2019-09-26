import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Test from './pages/Test';

class Router extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" component={Test}/>
                    <Route path="/test" component={Test}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default Router;