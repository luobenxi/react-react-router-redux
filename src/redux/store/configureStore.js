import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk"; // 该中间件可以使请求支持异步
import { createLogger } from 'redux-logger'; // 该中间件可以清晰的打印state改变前后的值
import reducers from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();
const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
}
const store = createStore(reducers,
    // 使用redux开发工具调试
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
);

export default store;