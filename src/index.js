import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.js';
import { Providers }  from 'react-redux';
import { configureStore } from './store';

ReactDOM.render(
    <Providers store={configureStore()}>
        <App/>
    </Providers>,
    document.getElementById('root')
);