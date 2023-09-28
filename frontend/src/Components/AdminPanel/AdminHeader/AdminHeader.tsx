// react
import React from 'react';

// icons
import { FaBars, FaUserTie } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

// redux
import { useDispatch, useSelector } from 'react-redux';

// axios
import { postLogout } from '../../../Services/Axios/Requests/auth';

// react toastify
import { ToastContainer, toast } from 'react-toastify';
import { clearUser } from '../../../Services/Redux/Slices/User';
import { useNavigate } from 'react-router-dom';

// admin header
const AdminHeader: React.FC<{
	setIsMenuShown: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsMenuShown }) => {
	// redux dispatch hook
	const dispatch = useDispatch();

	// navigator
	const navigate = useNavigate();

	// GET user infos from redux
	const user: {
		_id: string;
		username: string;
		firstName: string;
		lastName: string;
		phoneNumber: string;
		email: string;
		postalCode?: string;
		nationalCode?: string;
		address?: string;
		emailVerified: boolean;
		createdAt: string;
		updatedAt: string;
		isAdmin: boolean;
	} = useSelector((state: any) => state.user);

	const logoutHandler = () => {
		postLogout().then(() => {
			toast.success('با موفقیت از سیستم خارج شدید ! ✅', {
				onClose: () => {
					dispatch(clearUser());
					navigate('/');
				}
			});
		});
	};

	// tsx
	return (
		<>
			<header className="h-auto w-full md:p-5 p-3 border-b-2 bg-gray-200 shadow-lg">
				<div className="flex items-center justify-between">
					<button onClick={logoutHandler}>
						<FiLogOut className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-LightYellow/50 hover:bg-LightYellow" />
					</button>
					<span className="flex items-center gap-x-2 justify-end text-Dark md:text-sm lg:text-lg text-xs">
						<span className="text-DarkYellow">{user.phoneNumber}</span> |{' '}
						<span className="text-Info">{user.username}</span> |{' '}
						<span className="font-semibold text-Dark">
							{user.firstName} {user.lastName}
						</span>
						<FaUserTie className="text-red-500 w-10 h-10 p-2 rounded-full bg-LightYellow/50 hidden md:block" />
						<FaBars
							className="text-red-500 md:w-10 w-7 md:h-10 h-7 p-1.5 md:p-2 rounded-full bg-LightYellow/50 md:hidden block hover:bg-LightYellow"
							onClick={() => setIsMenuShown(true)}
						/>
					</span>
				</div>
			</header>
			{/* react toastify container */}
			<ToastContainer
				position="bottom-right"
				autoClose={4000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick={false}
				rtl={true}
				theme="light"
				pauseOnFocusLoss
				draggable={false}
				pauseOnHover
				toastStyle={{
					color: '#0A0706',
					fontFamily: 'Lalezar',
					background: '#FCFCFC',
					fontSize: '16px'
				}}
			/>
		</>
	);
};

// exports
export default AdminHeader;
