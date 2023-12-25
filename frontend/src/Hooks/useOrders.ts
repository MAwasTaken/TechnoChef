// react query
import { useQuery } from 'react-query';

// axios
import { getByUsername } from '../Services/Axios/Requests/orders';

// use best sellers
const useOrders = (userName: string) =>
	useQuery('Products/Latest', () => getByUsername(userName).then((res) => res.data), {
		refetchOnWindowFocus: false,
		retry: false
	});

// exports
export default useOrders;
