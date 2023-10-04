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

// GET all
const getAllProducts = async () => axiosInstance.get('/products');

// GET single product by short name
const getSingleProduct = async (shortName: string) =>
	axiosInstance.get(`/products/findByShortName/${shortName}`);

// DELETE single product by short name
const deleteSingleProduct = async (shortName: string) =>
	axiosInstance.delete(`/products/deleteByShortName/${shortName}`, { withCredentials: true });

// PUT single product by short name
const putSingleProduct = async (shortName: string, newProductInfos: FormData) =>
	axiosInstance.put(`/products/${shortName}`, newProductInfos, { withCredentials: true });

// exports
export {
	getBestSellers,
	getLatest,
	getFiltered,
	postCreateProduct,
	getAllProducts,
	getSingleProduct,
	deleteSingleProduct,
	putSingleProduct
};
