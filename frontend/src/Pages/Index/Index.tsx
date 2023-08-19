// components
import Header from '../../Components/Header/Header';
import AboutBrand from '../../Components/AboutBrand/AboutBrand';
import Footer from '../../Components/Footer/Footer';
import ProductBox from '../../Components/ProductBox/ProductBox';
import BestSellers from '../../Components/BestSellers/BestSellers';

// index
const Index: React.FC = () => {
	// tsx
	return (
		<>
			<Header />
			<main>
				<div className='mt-4 md:mt-8'>
					<BestSellers />
				</div>
				<div className="container my-4 flex flex-wrap items-center justify-between gap-y-10 md:mt-8">
					{/* <ProductBox gradientColor="#f43f5e" colors={['#334155', '#ffffff', '#000000']} />
					<ProductBox gradientColor="#eab308" colors={['#334155', '#ffffff', '#000000']} />
					<ProductBox gradientColor="#64748b" colors={['#334155', '#ffffff', '#000000']} /> */}
				</div>
				<AboutBrand />
			</main>
			<Footer />
		</>
	);
};

// exports
export default Index;
