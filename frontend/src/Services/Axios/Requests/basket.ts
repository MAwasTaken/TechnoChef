// axios
import axiosInstance from '../Configs/configs';

// PUT add product
const putAddProduct = async (productDetail: { productId: string; quantity: number }[]) =>
	axiosInstance.put('/basket/add', productDetail, { withCredentials: true });

// GET basket
const getBasket = async () => axiosInstance.get('/basket', { withCredentials: true });

// PUT remove product from basket
const putRemoveProduct = async (productDetail: { productId: string; quantity: number }) =>
	axiosInstance.put('/basket/remove', productDetail, { withCredentials: true });

// exports
export { putAddProduct, getBasket, putRemoveProduct };
