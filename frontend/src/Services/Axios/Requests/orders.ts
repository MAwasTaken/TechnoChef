// axios
import axiosInstance from '../Configs/configs';

// GET by username
const getByUsername = (username: string) =>
	axiosInstance.get(`/orders/getByuser/${username}`, { withCredentials: true });

// GET by id
const getById = (orderID: string) =>
	axiosInstance.get(`/orders/getById/${orderID}`, { withCredentials: true });

// GET by id
const getAllOrders = () => axiosInstance.get(`/orders`, { withCredentials: true });

// exports
export { getByUsername, getById, getAllOrders };