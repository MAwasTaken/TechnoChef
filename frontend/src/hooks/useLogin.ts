// react query
import { useMutation } from 'react-query';

// axios
import { postLogin } from '../Services/Axios/Requests/auth';

// use user login
const useLogin = (userInfos: string[]) =>
	useMutation('Auth/login', () => postLogin(userInfos).then((res) => res.data));

// exports
export default useLogin;
