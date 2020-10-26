import CreditMain, {
  CreditStart,
  CreditApproved,
  CreditDenied,
} from '@pages/Credit';

import { NotFound } from '@pages/Error'

const route = {
  path: ['/credit'],
  component: CreditMain,
  routes: [
    {
      path: ['/credit'],
      component: CreditStart,
      protected: true,
      exact: true,
    },
    {
      path: ['/credit/approved'],
      component: CreditApproved,
      protected: true,
      exact: true,
    },
    {
      path: ['/credit/denied'],
      component: CreditDenied,
      protected: true,
      exact: true,
    },
    {
      path: ['/credit/*'],
      component: NotFound,
    }
  ],
};

export default route;
