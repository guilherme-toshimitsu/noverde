import * as at from './creditActionTypes';

export default {
  [at.LOAN]: (state, args) => {
    return {
      ...state,
      isLoading: true,
      approved: false,
      approvedValue: {},
      request: args.request,
      response: false,
    };
  },
  [at.APPROVE]: (state, args) => {
    return {
      ...state,
      approved: true,
      approvedValue: args.value,
      request: args.request,
      response: args.response,
      cache: { ...state.cache, [args.transactionID]: { ...args.response } },
      isLoading: false,
    };
  },
  [at.DENY]: (state, args) => {
    return {
      ...state,
      approved: false,
      approvedValue: 0,
      request: args.request,
      response: args.response,
      isLoading: false,
    };
  },
  [at.FINISH_LOADING]: (state) => {
    return {
      ...state,
      approved: false,
      isLoading: false,
    };
  },
};
