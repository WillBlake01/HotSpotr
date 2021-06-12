import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { profile } from './profile';

export const rootReducer = history => combineReducers({
  router: connectRouter(history),
  user: profile
});
