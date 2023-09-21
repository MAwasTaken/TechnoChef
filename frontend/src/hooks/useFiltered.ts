// react query
import { useQuery } from 'react-query';

// axios
import { getFiltered } from '../Services/Axios/Requests/products/products';

// use best sellers
const useFiltered = (category: string[], search: string) =>
	useQuery(
		['Products/Filtered', category],
		() => {
			return getFiltered(category, search).then((res) => res.data.products);
		},
		{
			refetchOnWindowFocus: false,
			initialData: () => {}
		}
	);

// exports
export default useFiltered;
