// pages
import Index from './Pages/Index/Index';
import UnknownPage from './Pages/404/404';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Products from './Pages/Products/products';
import ProductDetails from './Pages/Product details/ProductDetail';

// AdminPanel
import AdminPanel from './Pages/AdminPanel/AdminPanel';


const routes = [
	{ path: '/', element: <Index /> },
	{ path: '/products', element: <Products /> },
	{ path: '/productDetails', element: <ProductDetails /> },
	{ path: '/login', element: <Login /> },
	{ path: '/signup', element: <Signup /> },
	{ path: 'admin', element: <AdminPanel /> },
	{ path: '*', element: <UnknownPage /> }
];

export default routes;
