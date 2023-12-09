// axios
import axiosInstance from '../Configs/configs';

// POST login
const postLogin = async (userInfos: { userInfo: string; password: string }) =>
	axiosInstance.post('/auth/login', userInfos, {
		withCredentials: true
	});

// POST signup
const postSignup = async (userInfos: {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
	username: string;
	password: string;
	isAdmin?: false;
}) => axiosInstance.post('/auth/register', userInfos);

// POST logout
const postLogout = async () => axiosInstance.post('/auth/logout', null, { withCredentials: true });

// POST reset password email
const postResetPasswordEmail = async (userEmail: string) =>
	axiosInstance.post('/auth/sendResetPassEmail', userEmail);

// POST reset password
const postResetPassword = async (jwtToken: string, newPassword: string) =>
	axiosInstance.post(`/auth/resetPass/${jwtToken}`, newPassword);

// POST send verify email code
const postSendVerifyCode = async () =>
	axiosInstance.post('/auth/sendVerificationEmail', null, { withCredentials: true });

// POST verify email code
const postVerifyEmail = async (code: { code: string }) =>
	axiosInstance.post('/auth/VerifyEmail', code, { withCredentials: true });

// exports
export {
	postLogin,
	postSignup,
	postLogout,
	postResetPasswordEmail,
	postResetPassword,
	postSendVerifyCode,
	postVerifyEmail
};
