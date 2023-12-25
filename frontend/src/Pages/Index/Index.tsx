// react
import { useEffect } from 'react';

// components
import Header from '../../Components/Header/Header';
import AboutBrand from '../../Components/AboutBrand/AboutBrand';
import Footer from '../../Components/Footer/Footer';
import BestSellers from '../../Components/BestSellers/BestSellers';
import Categories from '../../Components/Categories/Categories';
import Services from '../../Components/BrandServices/Services';
import LatestProducts from '../../Components/LatestProducts/LatestProducts';
import HeroSection from '../../Components/HeroSection/HeroSection';

// index page
const Index: React.FC = () => {
	// mounting side effects
	useEffect(() => {
		// change document title
		document.title = 'تکنو | Technoshef';

		// scroll to top when mounting
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, []);
  
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
