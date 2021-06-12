import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';

//Import the root reducer
import { rootReducer } from './reducers/index';

export const history = createBrowserHistory();

export const configureStore = defaultState => {
    const store = createStore(
        rootReducer(history), // root reducer with router state
        defaultState,
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history) // for dispatching history actions
            ),
        ),
    )
    return store;
}
