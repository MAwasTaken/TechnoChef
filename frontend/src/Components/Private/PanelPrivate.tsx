import React from 'react';
import { useNavigate } from 'react-router-dom';

// react query
import useGetMe from '../../Hooks/useGetMe';

// components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// react spinner
import { PacmanLoader } from 'react-spinners';

// panel private route
const PanelPrivate: React.FC<React.PropsWithChildren> = ({ children }) => {
	// navigator
	const navigate = useNavigate();

	// POST validate user token
	const { data, isFetching } = useGetMe();

	return (
		<>
			{isFetching ? (
				<main className="flex flex-col justify-between h-screen">
					<Header />
					<h1 className="text-center sm:text-2xl text-xl font-black text-Dark">
						در حال هدایت به پنل کاربری!
						<span className="text-LightYellow"> صبر کنید...</span>
					</h1>
					<div className="flex items-center justify-center -mt-16">
						<PacmanLoader color="#FCA921" />
					</div>
					<Footer />
				</main>
			) : data ? (
				<>{children}</>
			) : (
				navigate('/login')
			)}
		</>
	);
};
export default PanelPrivate;
