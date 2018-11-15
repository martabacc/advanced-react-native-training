// @flow

import type {LoginAction, LoginState} from '../../types';

const INITIAL_STATE: LoginState = {
  email: 'email@email.com',
  password: 'asdfasdfdsaf',
  token: '',
};

export default (state: LoginState = INITIAL_STATE, action: LoginAction) => {
  switch (action.type) {
    case 'LOGIN_USER':
      console.log("SDFSDFSDF", action);
      const {email, password} = action.payload;
      return {
        ...state,
        email,
        password,
      };
    case 'LOGOUT_USER':
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};
