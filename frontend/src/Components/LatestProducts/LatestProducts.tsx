import { MdOutlineWatchLater } from 'react-icons/md';

// components
import ProductBox from '../ProductBox/ProductBox';

// latest products
const LatestProducts = () => {
	return (
		<>
			<h2 className="font-Lalezar container flex select-none items-center gap-x-1 pt-4 text-sm text-yellow-500 drop-shadow-[0_0_8px_#f97316] md:mt-10 md:gap-x-4 md:text-3xl mb-4 md:mb-8">
				<MdOutlineWatchLater className="text-pink-500" />
				جدیدترین محصولات
			</h2>
			<section className="container mb-5 flex flex-wrap items-center justify-center gap-8 pb-4 md:gap-10 md:pb-8">
				<ProductBox
					gradientColor="#0f766e"
					colors={['#334155', '#ffffff', '#000000']}
					imageSrc="Images/Products/p6.png"
				/>
				<ProductBox
					gradientColor="#0e7490"
					colors={['#334155', '#ffffff', '#000000']}
					imageSrc="Images/Products/p6.png"
				/>
				<ProductBox
					gradientColor="#0369a1"
					colors={['#334155', '#ffffff', '#000000']}
					imageSrc="Images/Products/p6.png"
				/>
				<ProductBox
					gradientColor="#1d4ed8"
					colors={['#334155', '#ffffff', '#000000']}
					imageSrc="Images/Products/p6.png"
				/>
				<ProductBox
					gradientColor="#4338ca"
					colors={['#334155', '#ffffff', '#000000']}
					imageSrc="Images/Products/p6.png"
				/>
				<ProductBox
					gradientColor="#6d28d9"
					colors={['#334155', '#ffffff', '#000000']}
					imageSrc="Images/Products/p6.png"
				/>
				<ProductBox
					gradientColor="#7e22ce"
					colors={['#334155', '#ffffff', '#000000']}
					imageSrc="Images/Products/p6.png"
				/>
				<ProductBox
					gradientColor="#a21caf"
					colors={['#334155', '#ffffff', '#000000']}
					imageSrc="Images/Products/p6.png"
				/>
				<ProductBox
					gradientColor="#be185d"
					colors={['#334155', '#ffffff', '#000000']}
					imageSrc="Images/Products/p6.png"
				/>
				<ProductBox
					gradientColor="#be123c"
					colors={['#334155', '#ffffff', '#000000']}
					imageSrc="Images/Products/p6.png"
				/>
				<ProductBox
					gradientColor="#334155"
					colors={['#334155', '#ffffff', '#000000']}
					imageSrc="Images/Products/p6.png"
				/>
				<ProductBox
					gradientColor="#374151"
					colors={['#334155', '#ffffff', '#000000']}
					imageSrc="Images/Products/p6.png"
				/>
			</section>
		</>
	);
};

export default LatestProducts;
