// components
import Header from '../../Components/Header/Header';
import AboutBrand from '../../Components/AboutBrand/AboutBrand';
import Footer from '../../Components/Footer/Footer';
import BestSellers from '../../Components/BestSellers/BestSellers';
import MainSlider from '../../Components/MainSlider/MainSlider';
import Categories from '../../Components/Categories/Categories';
import Services from '../../Components/Services/Services';

// index
const Index: React.FC = () => {
	// tsx
	return (
		<>
			<Header />
			<main>
				<MainSlider />
				<BestSellers />
				<Categories />
				<Services />
				<AboutBrand />
			</main>
			<Footer />
		</>
	);
};

// exports
export default Index;
