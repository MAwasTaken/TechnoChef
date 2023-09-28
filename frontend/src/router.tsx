// pages
import Index from './Pages/Index/Index';
import UnknownPage from './Pages/404/404';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Products from './Pages/Products/products';
import ProductDetails from './Pages/Product details/ProductDetail';

// private routes
import PanelPrivate from './Components/Private/PanelPrivate';

// Admin Panel
import AdminPanel from './Pages/AdminPanel/AdminPanel';
import AdminPrivate from './Components/Private/AdminPrivate';

// user panel
import UserPanel from './Pages/UserPanel/UserPanel';
import AllProducts from './Components/AdminPanel/Products/AllProducts';
import Users from './Components/AdminPanel/Users/Users';

const routes = [
	{ path: '/', element: <Index /> },
	{ path: '/products', element: <Products /> },
	{ path: '/productDetails', element: <ProductDetails /> },
	{ path: '/login', element: <Login /> },
	{ path: '/signup', element: <Signup /> },
	{
		path: '/panel',
		element: (
			<PanelPrivate>
				<UserPanel />
			</PanelPrivate>
		)
	},
	{
		path: '/admin',
		element: (
			<AdminPrivate>
				<AdminPanel />
			</AdminPrivate>
		),
		children: [
			{ path: 'products', element: <AllProducts /> },
			{ path: 'users', element: <Users /> }
		]
	},
	{ path: '*', element: <UnknownPage /> }
];

export default routes;
