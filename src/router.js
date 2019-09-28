import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Test from './pages/Test';
import Home from './pages/Home';
import About from './pages/About';

class Router extends React.Component {
    render() {
        return (
            <HashRouter>
                <Route path="/" render={() =>
                    <App>
                        <Switch>
                            <Route path="/home" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/test" component={Test}/>
                            <Redirect to="/home"/>
                        </Switch>
                    </App>
                }/>
            </HashRouter>
        );
    }
}

export default Router;