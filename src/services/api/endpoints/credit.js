import api from '../api';

const path = '/fakes';

const getCreditApprove = (data) =>
  api.request(`${path}`, { data, method: 'post' });

export default {
  getCreditApprove,
};
