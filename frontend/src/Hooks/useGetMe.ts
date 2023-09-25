// react query
import { useQuery } from 'react-query';

// axios
import { getMe } from '../Services/Axios/Requests/user';

// use best sellers
const useGetMe = () =>
	useQuery('User/GetME', () => getMe().then((res) => res.data), {
		// refetchOnWindowFocus: false,
		retry: false,
		cacheTime: 0
	});

// exports
export default useGetMe;
