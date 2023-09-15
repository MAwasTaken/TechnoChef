// axios
import axiosInstance from '../../Configs/configs';

// GET best sellers
const getBestSellers = async () => axiosInstance.get('/products/?bestseller');

// exports
export { getBestSellers };
