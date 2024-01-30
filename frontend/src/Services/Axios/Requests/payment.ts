// axios
import axiosInstance from '../Configs/configs';

// POST getway
const postGetway = (description: string) =>
	axiosInstance.post(`/payment/gateway`, { description: description }, { withCredentials: true });

// GET verify
const getVerify = (authority: string) =>
	axiosInstance.get(`/payment/verify?Authority=${authority}`, { withCredentials: true });

// exports
export { postGetway, getVerify };
