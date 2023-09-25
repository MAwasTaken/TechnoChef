// react query
import { useQuery } from 'react-query';

// axios
import { getLatest } from '../Services/Axios/Requests/products';

// use best sellers
const useLatest = () =>
	useQuery('Products/latest', () => getLatest().then((res) => res.data.products), {
		refetchOnWindowFocus: false,
		refetchOnMount: false
	});

// exports
export default useLatest;
