import { createContext } from 'react';

const CreditContext = createContext({
  approved: false,
  isLoading: false,
  cache: {},
  approvedValue: 0,
  response: {
    status: 'approved',
    amount: 2000.0,
    period: 12,
    installment: 200.3,
    first_due_date: '2018-10-20',
  },
  request: {
    amount: 0,
  },
});

const CreditContextProvider = CreditContext.Provider;
const CreditContextConsumer = CreditContext.Consumer;

export { CreditContextConsumer, CreditContextProvider, CreditContext };
