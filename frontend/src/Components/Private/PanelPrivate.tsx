import React from 'react';
import { useNavigate } from 'react-router-dom';

// react query
import useGetMe from '../../Hooks/useGetMe';

// react spinner
import { PacmanLoader } from 'react-spinners';

// redux
import { setUser } from '../../Services/Redux/Slices/User';
import { useDispatch } from 'react-redux';

// panel private route
const PanelPrivate: React.FC<React.PropsWithChildren> = ({ children }) => {
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
						در حال هدایت به پنل کاربری!
						<span className="text-LightYellow"> صبر کنید...</span>
					</h1>
					<div className="flex items-center justify-center">
						<PacmanLoader color="#FCA921" />
					</div>
				</main>
			) : data?.isAdmin === false ? (
				<>{children}</>
			) : (
				navigate('/login')
			)}
		</>
	);
};
export default PanelPrivate;
