import React from 'react';
import { useNavigate } from 'react-router-dom';

// react query
import useGetMe from '../../Hooks/useGetMe';

// react spinner
import { PacmanLoader } from 'react-spinners';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Services/Redux/Slices/User';

// panel private route
const AdminPrivate: React.FC<React.PropsWithChildren> = ({ children }) => {
	// navigator
	const navigate = useNavigate();

	// redux dispatch hook
	const dispatch = useDispatch();

	// POST validate user token
	const { data, isFetching } = useGetMe();

	// set user data to redux store
	data ? dispatch(setUser(data)) : null;

	// tsx
	return (
		<>
			{isFetching ? (
				<main className="flex flex-col justify-center h-screen gap-y-16">
					<h1 className="text-center sm:text-2xl text-xl font-black text-Dark">
						در حال هدایت به پنل ادمین!
						<span className="text-LightYellow"> صبر کنید...</span>
					</h1>
					<div className="flex items-center justify-center">
						<PacmanLoader color="#FCA921" />
					</div>
				</main>
			) : data?.isAdmin === true ? (
				<>{children}</>
			) : (
				navigate('/login')
			)}
		</>
	);
};
export default AdminPrivate;
