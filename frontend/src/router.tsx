// pages
import Index from './Pages/Index/Index';
import UnknownPage from './Pages/404/404';
import Login from './Pages/Login/Login';

const routes = [
	{ path: '/', element: <Index /> },
	{ path: '/login', element: <Login /> },
	{ path: '*', element: <UnknownPage /> }
];

export default routes;
