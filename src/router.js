import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Test from './containers/Test';
import Home from './containers/Home';
import About from './containers/About';
import NotFound from './containers/NotFound';

class Router extends React.Component {
    render() {
        return (
            <HashRouter>
                <Route path="/" render={() =>
                    <App>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/home" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/test" component={Test}/>
                            <Route path="/*" component={NotFound}/>
                        </Switch>
                    </App>
                }/>
            </HashRouter>
        );
    }
}

export default Router;