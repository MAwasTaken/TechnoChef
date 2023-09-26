// axios
import axiosInstance from '../Configs/configs';

// GET best sellers
const getBestSellers = async () => axiosInstance.get('/products?bestseller=true');

// GET latest
const getLatest = async () => axiosInstance.get('/products?new');

// GET filtered
const getFiltered = async (category: string[], search: string) =>
	axiosInstance.get(`/products/?category=${category}&search=${search}`);

// exports
export { getBestSellers, getLatest, getFiltered };
