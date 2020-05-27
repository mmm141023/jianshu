import React from 'react';
import ReactDOM from 'react-dom';
import Globalstyle from './style'
import App from './App';
import './static/iconfont/iconfont.css'

const Global = (
    <div>
        <Globalstyle/>
        <App/>
    </div>
)

ReactDOM.render(
    Global,
    document.getElementById('root')
);

