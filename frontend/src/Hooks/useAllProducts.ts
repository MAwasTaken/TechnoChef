// react query
import { useQuery } from 'react-query';

// axios
import { getAllProducts, getBestSellers } from '../Services/Axios/Requests/products';

// use best sellers
const useAllProducts = () =>
	useQuery('Products/All', () => getAllProducts().then((res) => res.data.products), {
		refetchOnWindowFocus: false,
		refetchOnMount: true
	});

// exports
export default useAllProducts;
