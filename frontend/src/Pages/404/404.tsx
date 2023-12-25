// react
import { useEffect } from 'react';

// components
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

// not found page
const UnknownPage: React.FC = () => {
	// mounting side effects
	useEffect(() => {
		// change document title
    document.title = 'تکنو | Technoshef - 404';


		// scroll to top when mounting
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, []);

	return (
		<>
			<Header />
			<h1 className="flex h-96 items-center justify-center text-4xl">Page Not Found</h1>
			<Footer />
		</>
	);
};

// exports
export default UnknownPage;
