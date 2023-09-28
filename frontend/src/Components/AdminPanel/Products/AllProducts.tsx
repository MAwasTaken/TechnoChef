// react
import React from 'react';

// icons
import { BsBoxSeam } from 'react-icons/bs';

// components
import AdminProductBox from './../AdminProductBox/AdminProductBox';

const AllProducts = () => {
	return (
		<section className="p-5">
			<h3>
				<span className="flex items-center gap-x-2 text-xs md:text-sm lg:text-lg font-Lalezar">
					<BsBoxSeam className="text-red-500" />
					محصولات
				</span>
			</h3>
		</section>
	);
};

export default AllProducts;
