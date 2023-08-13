// pages
import Index from './Pages/Index/Index';
import UnknownPage from './Pages/404/404';

const routes = [
	{ path: '/', element: <Index /> },
	{ path: '*', element: <UnknownPage /> },
];

export default routes;
