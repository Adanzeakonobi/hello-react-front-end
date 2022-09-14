import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import greeting from './greeting/greeting';

const rootReducer = combineReducers({
  greeting,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;