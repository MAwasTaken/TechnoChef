// axios
import axiosInstance from '../Configs/configs';

// POST login
const postLogin = async (userInfos: { userInfo: string; password: string }) =>
	axiosInstance.post('/auth/login', userInfos, {
		withCredentials: true
	});

// POST signup
const postSignup = async (userInfos: {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
	username: string;
	password: string;
	isAdmin?: false;
}) => axiosInstance.post('/auth/register', userInfos);

const postLogout = async () => axiosInstance.post('/auth/logout', '', { withCredentials: true });

// exports
export { postLogin, postSignup };
