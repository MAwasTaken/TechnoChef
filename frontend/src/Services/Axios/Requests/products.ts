// axios
import axiosInstance from '../Configs/configs';

// GET best sellers
const getBestSellers = async () => axiosInstance.get('/products?bestseller=true');

// GET latest
const getLatest = async () => axiosInstance.get('/products?new');

// GET filtered
const getFiltered = async (category: string[], search: string) =>
	axiosInstance.get(`/products/?category=${category}&search=${search}`);

// POST create
const postCreateProduct = async (newProductInfos: FormData) =>
	axiosInstance.postForm('/products', newProductInfos, {
		headers: {
			'Content-Type': 'multipart/form-data'
		},
		withCredentials: true
	});

// exports
export { getBestSellers, getLatest, getFiltered, postCreateProduct };
