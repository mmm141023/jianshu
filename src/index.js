import React from 'react';
import ReactDOM from 'react-dom';
import Globalstyle from './style'
import App from './App';

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

