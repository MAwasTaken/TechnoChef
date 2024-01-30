// axios
import axiosInstance from '../Configs/configs';

// GET by username
const getByUsername = (username: string) =>
	axiosInstance.get(`/orders/getByuser/${username}`, { withCredentials: true });

// GET by id
const getById = (orderID: string) =>
	axiosInstance.get(`/orders/getById/${orderID}`, { withCredentials: true });

// GET all orders
const getAllOrders = () => axiosInstance.get(`/orders`, { withCredentials: true });

// DELETE order
const deleteOrder = (orderID: string) =>
	axiosInstance.delete(`/orders/${orderID}`, { withCredentials: true });

// PUT order status
const putOrder = (orderID: string, newOrderStatus: string) =>
	axiosInstance.put(`/orders/${orderID}`, { status: newOrderStatus }, { withCredentials: true });

// exports
export { getByUsername, getById, getAllOrders, deleteOrder, putOrder };
