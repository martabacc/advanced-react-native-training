// @flow

import type {RootAction, RootState} from '../../types';
import LoginComponent from './Login';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch: (action: RootAction) => void) => ({
  submit: (payload) => dispatch({type: 'LOGIN_USER', payload}),
  logout: () => dispatch({type: 'LOGOUT_USER'}),
});

const mapStateToProps = (state: RootState) => ({
  placeholder: state.login,
});

console.log("BYE");

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
