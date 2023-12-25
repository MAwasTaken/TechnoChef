// react query
import { useQuery } from 'react-query';

// axios
import { getBasket } from '../Services/Axios/Requests/basket';

// use best sellers
const useGetBasket = () =>
	useQuery('Basket/Get', () => getBasket().then((res) => res.data), {
		refetchOnWindowFocus: false,
		retry: false
	});

// exports
export default useGetBasket;
