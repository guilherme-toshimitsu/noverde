import settings from './settings';
import Home from './subroutes/home';
import Credit from './subroutes/credit';
import ErrorPage from './subroutes/error';

const routes = [Home, Credit, ErrorPage];

export default routes;
export { settings };
