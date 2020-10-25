import * as at from './authActionTypes';

export default {
  [at.LOGIN]: (state, args) => {
    return {
      ...state,
      authenticated: true,
      cpf: args.cpf,
    };
  },
  [at.LOGOUT]: (state) => {
    return { ...state, authenticated: false, cpf: null };
  },
};
