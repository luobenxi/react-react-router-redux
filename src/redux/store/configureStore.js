import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk"; // 该插件可以使请求支持异步
import reducers from '../reducer/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers,
    // 使用redux开发工具调试
    composeWithDevTools(
        applyMiddleware(thunk),
    )
);

export default store;