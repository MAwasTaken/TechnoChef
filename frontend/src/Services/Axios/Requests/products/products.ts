// axios
import axiosInstance from '../../Configs/configs';

// GET best sellers
const getBestSellers = async () => axiosInstance.get('/products/?bestseller');

// GET latest
const getLatest = async () => axiosInstance.get('/products/?new');

// exports
export { getBestSellers, getLatest };
