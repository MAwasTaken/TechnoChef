// react query
import { useQuery } from 'react-query';

// axios
import { getLatest } from '../Services/Axios/Requests/products/products';

// use best sellers
const useLatest = () =>
	useQuery('Products/BestSellers', () => getLatest().then((res) => res.data.products), {
		refetchOnWindowFocus: false
	});

// exports
export default useLatest;
