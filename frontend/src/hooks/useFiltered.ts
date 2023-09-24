// react query
import { useQuery } from 'react-query';

// axios
import { getFiltered } from '../Services/Axios/Requests/products';

// use best sellers
const useFiltered = (category: string[], search: string) =>
	useQuery(
		['Products/Filtered', category],
		() => {
			return getFiltered(category, search).then((res) => res.data.products);
		},
		{
			refetchOnWindowFocus: false,
			keepPreviousData: true
		}
	);

// exports
export default useFiltered;
