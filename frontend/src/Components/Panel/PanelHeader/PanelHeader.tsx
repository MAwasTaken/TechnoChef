// react
import React, { useState } from 'react';

// icons
import { FaBars, FaUserTie } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

// redux
import { useSelector } from 'react-redux';

// axios
import { postLogout } from '../../../Services/Axios/Requests/auth';

// react toastify
import { ToastContainer, toast } from 'react-toastify';

// react spinner
import { BeatLoader } from 'react-spinners';

// user header
const PanelHeader: React.FC<{
	setIsMenuShown: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsMenuShown }) => {
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

	// logout fetch state
	const [isFetching, seIsFetching] = useState<boolean>(false);

	// auth logout handler
	const logoutHandler = () => {
		// set is fetching state to true
		seIsFetching(true);

		// POST logout
		postLogout()
			.then(() => {
				toast.success('با موفقیت از سیستم خارج شدید ! ✅', {
					onClose: () => location.assign('/')
				});
			})
			.finally(() =>
				// set is fetching state to false
				seIsFetching(false)
			);
	};

	// tsx
	return (
		<>
			<header className="h-auto w-full md:p-5 p-3 border-b-2 bg-gray-200 shadow-lg">
				<div className="flex items-center justify-between">
					<button onClick={logoutHandler}>
						{isFetching ? (
							<BeatLoader size={10} color="#FCA921" />
						) : (
							<FiLogOut className="text-red-500 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1.5 rounded-full transition-all duration-500 bg-LightYellow/50 hover:bg-LightYellow" />
						)}
					</button>
					<span className="flex items-center gap-x-2 justify-end text-Dark md:text-sm lg:text-lg text-xs select-none">
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
export default PanelHeader;
