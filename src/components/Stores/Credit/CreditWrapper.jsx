import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { createReducer } from '@utils/createReducer';
import Api from '@api';
// import { useSnackBar } from '@components/SnackBar';

import * as actionTypes from './Reducer/creditActionTypes';
import actions from './Reducer/creditActions';
import initialState from './Reducer/creditState';
import { CreditContextProvider } from './creditContext';

const reducer = createReducer(actions);

const CreditWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();
  const doLoan = (data) => {
    //RAM CACHE on Session... Persistence while site is running on client.

    if (!state.isLoading) {
      let transactionID =
        data.cpf.toString() + Math.round((data.value * 100) / 100).toFixed(2);
      let request = {
        cpf: data.cpf,
        amount: Math.round((data.value * 100) / 100),
      };
      if (!state.cache[transactionID]) {
        dispatch({ type: actionTypes.LOAN });
        Api.credit
          .getCreditApprove(request)
          .then((response) => {
            checkResponse(request, response, transactionID);
          })
          .catch((err) => {
            dispatch({ type: actionTypes.FINISH_LOADING });
            alert('Erro no Request', err);
          });
      } else {
        //Get data from cache
        dispatch({
          type: actionTypes.APPROVE,
          transactionID: transactionID,
          response: { ...state.cache[transactionID] },
          request: request,
          value: request.amount,
        });
        history.push('/credit/approved');
      }
    } else {
      alert('Transacao em andamento, espere ela terminar');
    }
  };

  const checkResponse = (request, response, transactionID) => {
    if (response.status === 'approved') {
      dispatch({
        type: actionTypes.APPROVE,
        request: request,
        response: response,
        transactionID: transactionID,
        value: response.amount,
      });
      history.push('/credit/approved');
    } else {
      dispatch({
        type: actionTypes.DENY,
        request: request,
        response: response,
      });
      history.push('/credit/denied');
    }
  };

  const actionResolver = {
    doLoan: doLoan,
  };
  return (
    <CreditContextProvider value={[state, actionResolver]}>
      {children}
    </CreditContextProvider>
  );
};

CreditWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default CreditWrapper;
