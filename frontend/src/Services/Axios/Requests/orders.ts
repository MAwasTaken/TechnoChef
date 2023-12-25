// axios
import axiosInstance from '../Configs/configs';

// GET by username
const getByUsername = (username: string) =>
	axiosInstance.get(`orders/getByuser/${username}`, { withCredentials: true });

// exports
export { getByUsername };
