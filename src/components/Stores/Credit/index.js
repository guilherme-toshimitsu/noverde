import { useContext } from 'react';
import {
  CreditContextConsumer,
  CreditContext,
  CreditContextProvider,
} from './creditContext';

import CreditWrapper from './CreditWrapper';

const useCredit = () => useContext(CreditContext);

export default CreditWrapper;
export { useCredit, CreditContextConsumer, CreditContextProvider };
