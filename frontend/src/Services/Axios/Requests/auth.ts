// axios
import axiosInstance from '../Configs/configs';

// POST login
const postLogin = async (userInfos: string[]) =>
	axiosInstance.post('/auth/login', userInfos, {
		withCredentials: true
	});

export { postLogin };
