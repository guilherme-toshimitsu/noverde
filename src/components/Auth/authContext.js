import { createContext } from 'react';

const AuthContext = createContext({
  authenticated: false,
  cpf: null,
});

const AuthContextProvider = AuthContext.Provider;
const AuthContextConsumer = AuthContext.Consumer;

export { AuthContextConsumer, AuthContextProvider, AuthContext };
