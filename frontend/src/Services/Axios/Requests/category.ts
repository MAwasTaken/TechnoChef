// axios
import axiosInstance from '../Configs/configs';

// GET all categories
const getCategories = async () => axiosInstance.get('/category', { withCredentials: true });

// POST category
const postCreateCategory = async (newCategoryInfos: FormData) =>
	axiosInstance.post('/category', newCategoryInfos, { withCredentials: true });

// exports
export { getCategories, postCreateCategory };
