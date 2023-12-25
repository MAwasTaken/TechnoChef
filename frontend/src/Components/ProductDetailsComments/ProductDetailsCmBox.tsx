// react
import React, { useState } from 'react';

const ProductDetailsCmBox = () => {
	return (
		<div className="flex flex-col gap-y-7 p-5 w-full h-max">
			{/* user comment */}
			<div className="flex flex-col gap-y-2 bg-Dark/20 h-max rounded-2xl px-3 py-2">
				<div className="flex flex-row items-center">
					<span className="flex text-sm w-1/2 font-Lalezar">وحید مرادی</span>
					<div className="flex flex-row gap-x-3 w-1/2 justify-end ">
						<span>2/7/1402</span>
						<span>12:55</span>
					</div>
				</div>
				<div className="border-t border-gray-900 w-full"></div>
				<p className="">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Repudiandae id dolore qui voluptatibus ducimus fugiat
					repellat
				</p>
			</div>
			<div className="border-t border-gray-300 w-3/4"></div>
		</div>
	);
};

export default ProductDetailsCmBox;
