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
				<div className="container my-4 flex flex-wrap items-center justify-between gap-y-10 md:mt-8">
					<ProductBox color="#f43f5e" />
					<ProductBox color="#eab308" />
					<ProductBox color="#64748b" />
				</div>
				<AboutBrand />
			</main>
			<Footer />
		</>
	);
};

// exports
export default Index;
