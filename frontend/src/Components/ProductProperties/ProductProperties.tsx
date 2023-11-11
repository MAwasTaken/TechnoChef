// react
import React from 'react';

// icons
import { BiInfoCircle } from 'react-icons/bi';

// components
import ProductPropertiesBox from '../../Components/ProductPropertiesBox/ProductPropertiesBox';

// types
import { ProductProps } from '../../Types/Products.types';

const ProductProperties: React.FC<ProductProps> = ({ details }) => {
	return (
		<div className="md:container w-full mx-auto">
			<main className="flex w-full flex-col gap-x-2 md:gap-y-4 gap-y-1 items-center p-4 md:p-8 justify-center md:rounded-3xl bg-white shadow-md">
				{/* Property label */}
				<div className="flex flex-row w-full">
					<label htmlFor="" className="flex flex-row md:gap-x-3 gap-x-1 items-center text-lg">
						<BiInfoCircle className="text-orange-500 md:text-3xl text-sm"></BiInfoCircle>
						<span className="font-Lalezar md:text-3xl text-sm tracking-wide">مشخصات</span>
					</label>
				</div>
				{/* divider */}
				<div className="border-t border-red-500 w-full"></div>
				{/* properties */}
				<div className="flex w-11/12 flex-col items-center">
					{details?.map((detail, index) => <ProductPropertiesBox key={index} {...detail} />)}
				</div>
			</main>
		</div>
	);
};

export default ProductProperties;
