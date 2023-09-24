// react query
import { useMutation } from 'react-query';

// axios
import { postLogin } from '../Services/Axios/Requests/auth';

// use user login
const useLogin = (userInfos: { userInfo: string; password: string }) =>
	useMutation('Auth/login', () => postLogin(userInfos));

// exports
export default useLogin;
