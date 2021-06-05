import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import profile from './profile';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  user: profile
});

export default rootReducer;
