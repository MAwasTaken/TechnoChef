// axios
import axiosInstance from '../Configs/configs';

// types
import { user } from '../../../Types/User.types';

// GET me
const getMe = async () => axiosInstance.get('/users', { withCredentials: true });

// GET all
const getAll = async () => axiosInstance.get('/users/getAll', { withCredentials: true });

// GET by id
const getSingleUser = async (userName: string) =>
	axiosInstance.get(`/users/find/${userName}`, { withCredentials: true });

// DELETE by id
const deleteSingleUser = async (userName: string) =>
	axiosInstance.delete(`/users/${userName}`, { withCredentials: true });

// PUT user
const putSingleUser = async (newUserDetails: user) =>
	axiosInstance.put(`/users/${newUserDetails.username}`, newUserDetails, { withCredentials: true });

// exports
export { getMe, getAll, getSingleUser, deleteSingleUser, putSingleUser };
