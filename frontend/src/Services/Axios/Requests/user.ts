// axios
import axiosInstance from '../Configs/configs';

// GET me
const getMe = async () => axiosInstance.get('/users', { withCredentials: true });

// GET all
const getAll = async () => axiosInstance.get('/users/getAll', { withCredentials: true });

// exports
export { getMe, getAll };
