import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { configureStore, history } from '../configureStore';
import { Landing } from '../pages/Landing';
import { Dashboard } from '../pages/Dashboard';
require('dotenv').config();

//Create an object for the default data
const defaultState = {};

const store = configureStore(defaultState);

export const Router = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/dashboard' component={Dashboard} />
            </Switch>
        </ConnectedRouter>
    </Provider>
)
