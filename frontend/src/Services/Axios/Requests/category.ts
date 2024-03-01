// axios
import axiosInstance from '../Configs/configs';

// GET all categories
const getCategories = async () => axiosInstance.get('/category', { withCredentials: true });

// POST category
const postCreateCategory = async (newCategoryInfos: FormData) =>
	axiosInstance.post('/category', newCategoryInfos, { withCredentials: true });

// DELETE category
const deleteCategory = async (categoryID: string) =>
	axiosInstance.delete(`/category/${categoryID}`, { withCredentials: true });

// PUT category
const putCategory = async (categoryID: string, categoryInfo: FormData) =>
	axiosInstance.put(`/category/${categoryID}`, categoryInfo, { withCredentials: true });
  
// exports
export { getCategories, postCreateCategory, deleteCategory, putCategory };
