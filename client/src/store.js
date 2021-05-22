import { createStore } from 'redux';
import { signup, login } from './actions/actionCreator';
// import { syncHistoryWithStore } from 'react-router-redux';

//Import the root reducer
import rootReducer from './reducers/index';

//Create an object for the default data
const defaultState = {
    user: {
        email: ''
    }
};

const store = createStore(rootReducer, defaultState);

store.dispatch(signup('william1@me.com'));

// export const history = syncHistoryWithStore(store);

export default store;
