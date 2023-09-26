// axios
import axiosInstance from '../Configs/configs';

// GET me
const getMe = async () => axiosInstance.get('/users', { withCredentials: true });

// exports
export { getMe };
