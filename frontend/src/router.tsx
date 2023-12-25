// pages
import Index from './Pages/Index/Index';
import UnknownPage from './Pages/404/404';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Products from './Pages/Products/products';
import ProductDetails from './Pages/Product details/ProductDetail';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import ChangePassword from './Pages/ChangePassword/ChangePassword';

// private routes
import PanelPrivate from './Components/Private/PanelPrivate';

// Admin Panel
import AdminPanel from './Pages/AdminPanel/AdminPanel';
import AdminPrivate from './Components/Private/AdminPrivate';
import AdminCategories from './Components/AdminPanel/Categories/AdminCategories';
import AdminProducts from './Components/AdminPanel/Products/AdminProducts';
import CreateNewProduct from './Components/AdminPanel/Products/CreateNewProduct/CreateNewProduct';
import SingleProduct from './Components/AdminPanel/Products/SingleProduct/SingleProduct';
import AdminUsers from './Components/AdminPanel/Users/AdminUsers';
import SingleUser from './Components/AdminPanel/Users/SingleUser/SingleUser';
import CreateNewCategory from './Components/AdminPanel/Categories/CreateNewCategory/CreateNewCategory';
import SingleCategory from './Components/AdminPanel/Categories/SingleCategory/SingleCategory';

// user panel
import UserPanel from './Pages/UserPanel/UserPanel';
import AboutUs from './Pages/AboutUs/AboutUs';
import PanelEditUser from './Components/Panel/PanelEditUser/PanelEditUser';
import PanelBasket from './Components/Panel/PanelBasket/PanelBasket';
import PanelOrders from './Components/Panel/PanelOrders/PanelOrders';

const routes = [
	{ path: '/', element: <Index /> },
	{ path: '/products', element: <Products /> },
	{ path: '/products/:shortName', element: <ProductDetails /> },
	{ path: '/login', element: <Login /> },
	{ path: '/signup', element: <Signup /> },
	{ path: '/reset-password', element: <ResetPassword /> },
	{ path: '/reset-password/:jwtToken', element: <ChangePassword /> },
	{ path: '/about-us', element: <AboutUs /> },
	{
		path: '/panel',
		element: (
			<PanelPrivate>
				<UserPanel />
			</PanelPrivate>
		),
		children: [
			{
				path: ':userID',
				element: <PanelEditUser />
			},
			{
				path: 'basket',
				element: <PanelBasket />
			},
			{
				path: 'orders',
				element: <PanelOrders />
			}
		]
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
			{ path: 'users', element: <AdminUsers /> },
			{ path: 'users/:userName', element: <SingleUser /> },
			{ path: 'categories', element: <AdminCategories /> },
			{ path: 'categories/:href', element: <SingleCategory /> },
			{ path: 'categories/create', element: <CreateNewCategory /> }
		]
	},
	{ path: '*', element: <UnknownPage /> }
];

export default routes;
