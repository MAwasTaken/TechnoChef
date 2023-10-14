// react query
import { useQuery } from 'react-query';

// axios
import { getFiltered } from '../Services/Axios/Requests/products';

// use best sellers
const useFiltered = (category: string, search: string, priceSort: string) =>
	useQuery(
		['Products/Filtered'],
		() => {
			return getFiltered(category, search, priceSort).then((res) => res.data.products);
		},
		{
			refetchOnWindowFocus: false,
			keepPreviousData: true
		}
	);

// exports
export default useFiltered;
