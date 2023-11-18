// react
import { Link } from 'react-router-dom';

// beta plan
const BetaPlan = () => {
	return (
		<section className="mt-2 flex h-full items-center justify-between gap-x-2 lg:mt-0 lg:flex-col">
			<Link to="https://beta.refah-bank.ir/" target="_blank">
				<img
					className="max-h-[225px] lg:h-auto lg:w-auto"
					src="/Images/MainSlider/beta.jpeg"
					alt=""
          loading="lazy"
				/>
			</Link>
			<Link to="https://beta.refah-bank.ir/" target="_blank">
				<img
					className="max-h-[225px] lg:h-auto lg:w-auto"
					src="/Images/MainSlider/beta2.png"
					alt=""
          loading="lazy"
				/>
			</Link>
		</section>
	);
};

export default BetaPlan;
