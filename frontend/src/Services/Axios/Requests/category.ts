// axios
import axiosInstance from '../Configs/configs';

// GET all categories
const getCategories = async () => axiosInstance.get('/category', { withCredentials: true });

// exports
export { getCategories };
