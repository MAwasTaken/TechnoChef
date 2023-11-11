// react query
import { useQuery } from 'react-query';

// axios
import { getCategories } from '../Services/Axios/Requests/category';

// use best sellers
const useCategories = () =>
	useQuery('Categories/All', () => getCategories().then((res) => res.data), {
		refetchOnWindowFocus: false,
		refetchOnMount: false
	});

// exports
export default useCategories;
