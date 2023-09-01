// components
import Header from '../../Components/Header/Header';
import AboutBrand from '../../Components/AboutBrand/AboutBrand';
import Footer from '../../Components/Footer/Footer';
import BestSellers from '../../Components/BestSellers/BestSellers';
import Categories from '../../Components/Categories/Categories';
import Services from '../../Components/Services/Services';
import LatestProducts from '../../Components/LatestProducts/LatestProducts';
import HeroSection from '../../Components/HeroSection/HeroSection';

// index page
const Index: React.FC = () => {
	// tsx
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<BestSellers />
				<Categories />
				<LatestProducts />
				<Services />
				<AboutBrand />
			</main>
			<Footer />
		</>
	);
};

// exports
export default Index;
