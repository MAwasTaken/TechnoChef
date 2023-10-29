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
import AdminProducts from './Components/AdminPanel/Products/AdminProducts';
import CreateNewProduct from './Components/AdminPanel/Products/CreateNewProduct/CreateNewProduct';
import SingleProduct from './Components/AdminPanel/Products/SingleProduct/SingleProduct';
import AboutUs from './Pages/AboutUs/AboutUs';
import AdminUsers from './Components/AdminPanel/Users/AdminUsers';

const routes = [
	{ path: '/', element: <Index /> },
	{ path: '/products', element: <Products /> },
	{ path: '/products/:shortName', element: <ProductDetails /> },
	{ path: '/login', element: <Login /> },
	{ path: '/signup', element: <Signup /> },
	{ path: '/about-us', element: <AboutUs /> },

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
			{
				path: 'products',
				element: <AdminProducts />
			},
			{
				path: 'products/create',
				element: <CreateNewProduct />
			},
			{
				path: 'products/:shortName',
				element: <SingleProduct />
			},
			{ path: 'users', element: <AdminUsers /> }
		]
	},
	{ path: '*', element: <UnknownPage /> }
];

export default routes;
