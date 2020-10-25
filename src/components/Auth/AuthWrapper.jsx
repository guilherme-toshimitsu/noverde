import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import { createReducer } from '@utils/createReducer';
// import Api from '@api';
// import { useSnackBar } from '@components/SnackBar';

import * as actionTypes from './Reducer/authActionTypes';
import actions from './Reducer/authActions';
import initialState from './Reducer/authState';
import { AuthContextProvider } from './authContext';

const reducer = createReducer(actions);

const AuthWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const doLogin = (cpf) => {
    dispatch({ type: actionTypes.LOGIN, cpf });
  };

  const doLogout = () => {
    dispatch({ type: actionTypes.LOGOUT });
  };

  const actionResolver = {
    doLogin: doLogin,
    doLogout: doLogout,
  };
  return (
    <AuthContextProvider value={[state, actionResolver]}>
      {children}
    </AuthContextProvider>
  );
};

AuthWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default AuthWrapper;
