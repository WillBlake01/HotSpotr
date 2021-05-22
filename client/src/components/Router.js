import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import App from './App';
import Landing from '../pages/Landing';
import Dashboard from '../pages/Dashboard';
require('dotenv').config();

const Router = () => (
    <Provider store={store}>
        <BrowserRouter store={store}>
            <Switch store={store}>
                <Route store={store} exact path='/' component={Landing} />
                <Route store={store} exact path='/dashboard' component={Dashboard} />
                <Route store={store} path='/store/:storeId' component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>
)

export default Router;
