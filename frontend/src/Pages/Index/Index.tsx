// components
import Header from '../../Components/Header/Header';
import AboutBrand from '../../Components/AboutBrand/AboutBrand';
import Footer from '../../Components/Footer/Footer';
import ProductBox from '../../Components/ProductBox/ProductBox';

// index
const Index: React.FC = () => {
	// tsx
	return (
		<>
			<Header />
			<main>
				<div className="container my-4 flex flex-wrap gap-y-10 items-center justify-between md:mt-8">
					<ProductBox fromColor="#3b82f6" toColor="#f43f5e" titleColor='white' />
					<ProductBox fromColor="#eab308" toColor="#84cc16" titleColor='black' />
					<ProductBox fromColor="#64748b" toColor="#0c4a6e" titleColor='white' />
				</div>
				<AboutBrand />
			</main>
			<Footer />
		</>
	);
};

// exports
export default Index;
