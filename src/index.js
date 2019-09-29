import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import { Provider } from 'react-redux';
import store from './redux/store/configureStore';
import * as serviceWorker from './serviceWorker';
import './style/common.less';
import './App.css';

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
