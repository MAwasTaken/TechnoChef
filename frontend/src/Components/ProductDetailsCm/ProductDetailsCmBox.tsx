// react
import React, { useState } from 'react';

// icons
import { BiShoppingBag, BiSort, BiComment } from 'react-icons/bi';

const ProductDetailsCmBox = () => {
	return (
		<div className="flex flex-col gap-y-7 p-5 w-full h-max">
			{/* user comment */}
			<div className="flex flex-col gap-y-4 w-3/5 bg-gray-200 h-max rounded-2xl p-5">
				<div className="flex flex-row items-center">
					<span className="flex text-xl w-1/2">وحید مرادی</span>
					<div className="flex flex-row gap-x-3 w-1/2 justify-end ">
						<span>2/7/1402</span>
						<span>12:55</span>
					</div>
				</div>
				<div className="border-t border-gray-900 w-full"></div>
				<p className="leading-6">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Repudiandae id dolore qui voluptatibus ducimus fugiat
					repellat eligendi laudantium, iusto ullam rem dignissimos optio ad animi quas! Soluta,
					quis deleniti. Animi.. Officia necessitatibus ea neque non et quo accusantium, molestias
					dolorum eum repudiandae odio perspiciatis dolores, error consectetur qui debitis eos illum
					distinctio?
				</p>
			</div>
			<div className="border-t border-gray-300 w-3/4"></div>
		</div>
	);
};

export default ProductDetailsCmBox;
