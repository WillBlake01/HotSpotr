import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';

//Import the root reducer
import rootReducer from './reducers/index';

export const history = createBrowserHistory();

export default function configureStore(defaultState) {
    const store = createStore(
        rootReducer(history), // root reducer with router state
        defaultState,
        compose(
            applyMiddleware(
                routerMiddleware(history) // for dispatching history actions
            ),
        ),
    )
    return store;
}
