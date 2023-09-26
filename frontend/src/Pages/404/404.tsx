// components
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

// not found page
const UnknownPage = () => {
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
