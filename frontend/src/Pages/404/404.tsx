// react
import { useEffect } from 'react';

// components
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

// not found page
const UnknownPage: React.FC = () => {
	// back
	const goBack = () => {
		window.history.back();
	};
	// mounting side effects
	useEffect(() => {
		// change document title
		document.title = 'تکنو | Technoshef - 404';


		// scroll to top when mounting
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, []);

	return (
		<>
			{/* <Header /> */}
			<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
				<div className="text-5xl font-bold text-gray-800 mb-4">۴۰۴</div>
				<div className="text-2xl font-semibold text-gray-600 mb-8">صفحه مورد نظر پیدا نشد</div>
				<div className="relative">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="w-32 h-32 text-gray-400"
					>
						<circle cx="12" cy="12" r="10" />
						<line x1="15" y1="9" x2="9" y2="15" />
						<line x1="9" y1="9" x2="15" y2="15" />
					</svg>
				</div>
				<div className="text-lg text-gray-500 mt-8">متاسفانه صفحه ای که دنبالش بودید , پیدا نشد :(</div>
				<div className="mt-8">
					<button className="px-8 py-3 bg-yellow-400 text-Dark rounded-lg hover:bg-DarkYellow"
						onClick={goBack}>
						بازگشت
					</button>
				</div>
			</div>
			{/* <Footer /> */}
		</>
	);
};

// exports
export default UnknownPage;
