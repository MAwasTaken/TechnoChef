// react query
import { useQuery } from 'react-query';

// axios
import { getAll } from '../Services/Axios/Requests/user';

// use best sellers
const useGetAllUsers = () =>
	useQuery('User/GetAll', () => getAll().then((res) => res.data), {
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		retry: false
	});

// exports
export default useGetAllUsers;
