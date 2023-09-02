import BetaPlan from './BetaPlan/BetaPlan';
import MainSlider from './MainSlider/MainSlider';

// hero section
const HeroSection = () => {
	return (
		<div className="container mb-4 grid grid-cols-12 gap-x-4 pb-4 md:mb-10">
			<div className="col-span-12 lg:col-span-10">
				<MainSlider />
			</div>
			<div className="col-span-12 overflow-hidden lg:col-span-2">
				<BetaPlan />
			</div>
		</div>
	);
};

export default HeroSection;
