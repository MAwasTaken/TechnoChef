// react query
import { useMutation } from 'react-query';

// axios
import { postSignup } from '../Services/Axios/Requests/auth';

// use user login
const useSignup = (userInfos: {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
	username: string;
	password: string;
	isAdmin: boolean;
}) => useMutation('Auth/login', () => postSignup(userInfos).then((res) => res.data));

// exports
export default useSignup;
