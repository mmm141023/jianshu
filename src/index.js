import React from 'react';
import ReactDOM from 'react-dom';
import Globalstyle from './style'
import { Provider } from 'react-redux'
import store from "./store";
import App from './App';
import './static/iconfont/iconfont.css'

const Global = (
    <Provider store={store}>
        <Globalstyle/>
        <App/>
    </Provider>
)

ReactDOM.render(
    Global,
    document.getElementById('root')
);

