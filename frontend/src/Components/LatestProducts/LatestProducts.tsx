import { MdOutlineWatchLater } from 'react-icons/md';

// components
import ProductBox from '../ProductBox/ProductBox';
import useLatest from '../../Hooks/useLatest';
import { ProductProps } from '../../Types/Products.types';

// latest products
const LatestProducts = () => {
	// GET latest products
	const { data } = useLatest();

	return (
		<>
			<h2 className="font-Lalezar container mb-4 flex select-none items-center gap-x-1 pt-4 text-sm md:mb-8 md:mt-10 md:gap-x-4 md:text-3xl">
				<MdOutlineWatchLater className="text-DarkYellow" />
				جدیدترین محصولات
			</h2>
			<section className="container mb-5 flex flex-wrap items-center justify-center gap-8 pb-4 md:gap-16 md:pb-8">
				{data?.map((product: ProductProps) => <ProductBox {...product} key={product._id} />)}
			</section>
		</>
	);
};

export default LatestProducts;
