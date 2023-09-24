// react query
import { useQuery } from 'react-query';

// axios
import { getBestSellers } from '../Services/Axios/Requests/products';

// use best sellers
const useBestSellers = () =>
	useQuery('Products/BestSellers', () => getBestSellers().then((res) => res.data.products), {
		refetchOnWindowFocus: false
	});

// exports
export default useBestSellers;
