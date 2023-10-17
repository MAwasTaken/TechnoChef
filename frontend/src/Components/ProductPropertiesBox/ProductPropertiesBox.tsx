import React from 'react';

const ProductPropertiesBox: React.FC<{
	title: string;
	value: string;
}> = ({ title, value }) => {
	return (
		<div className="flex text-sm sm:text-lg lg:text-xl gap-x-6 w-full">
			<span className="text-Info py-3 font-semibold my-auto">{title}</span>
			<div className="flex w-full justify-end h-max">
				<p className="flex border-b-2 items-center w-11/12 py-3 tracking-tight">{value}</p>
			</div>
		</div>
	);
};

export default ProductPropertiesBox;
