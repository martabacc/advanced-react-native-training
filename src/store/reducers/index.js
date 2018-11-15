// @flow

import {combineReducers} from 'redux';

import counterReducer from './counter';
import transactionReducer from './transaction';
import loginReducer from './LoginReducer';

export default combineReducers({
  counter: counterReducer,
  transaction: transactionReducer,
  login: loginReducer,
});
