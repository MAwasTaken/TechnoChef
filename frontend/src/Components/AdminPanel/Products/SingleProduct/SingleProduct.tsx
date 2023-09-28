// react
import { Link } from 'react-router-dom';

// icons
import { BsBoxSeam } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';

// single product
const SingleProduct = () => {
	// tsx
	return (
		<section className="md:p-5 p-3">
			{/* header */}
			<h3 className="flex justify-between items-center border-b border-Info pb-3">
				<span className="flex select-none transition-colors items-center gap-x-2 text-xl md:text-2xl lg:text-3xl font-Lalezar tracking-wider">
					<BsBoxSeam className="text-red-500" />
					محصولات - {'yakh120'}
				</span>
				<Link
					to="/admin/products"
					className="md:border-2 border duration-500 transition-all border-Info p-1 border-dashed rounded-md hover:bg-Info/50 flex tracking-tighter gap-x-2 items-center justify-center"
				>
					<span>
						<BiArrowBack className="text-red-500 w-5 h-5" />
					</span>
				</Link>
			</h3>
		</section>
	);
};

// exports
export default SingleProduct;
