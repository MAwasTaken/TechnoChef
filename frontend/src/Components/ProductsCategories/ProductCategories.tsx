// react
import React, { useState } from 'react';

// icons
import { BiCategory } from 'react-icons/bi';

// products categories
const ProductCategories: React.FC = () => {
	// tsx
	return (
		<div
			id="prod-category"
			className="bg-Info/50 hidden h-max flex-col gap-y-5 rounded-3xl p-6 xl:flex xl:w-[300px]"
		>
			<div className="flex items-center gap-x-2">
				<BiCategory className="text-3xl text-red-500" />
				<span className="font-Lalezar select-none md:text-2xl">دسته بندی محصولات</span>
			</div>
			<div className="mr-8 flex flex-col gap-y-6">
				<label htmlFor="cat1" className="flex items-center gap-x-3">
					<input
						type="checkbox"
						className="accent-DarkYellow bg-DarkYellow/50 h-5 w-5 rounded-md outline-none"
						id="cat1"
					/>
					<span className="text-Dark/75 cursor-pointer select-none text-base font-semibold">
						یخچال ها و برودتی
					</span>
				</label>
				<label htmlFor="cat2" className="flex items-center gap-x-3">
					<input
						type="checkbox"
						className="accent-DarkYellow bg-DarkYellow/50 h-5 w-5 rounded-md outline-none"
						id="cat2"
					/>
					<span className="text-Dark/75 cursor-pointer select-none text-base font-semibold">
						مایکروویو
					</span>
				</label>
				<label htmlFor="cat3" className="flex items-center gap-x-3">
					<input
						type="checkbox"
						className="accent-DarkYellow bg-DarkYellow/50 h-5 w-5 rounded-md outline-none"
						id="cat3"
					/>
					<span className="text-Dark/75 cursor-pointer select-none text-base font-semibold">
						گاز رومیزی و جدا
					</span>
				</label>
				<label htmlFor="cat4" className="flex items-center gap-x-3">
					<input
						type="checkbox"
						className="accent-DarkYellow bg-DarkYellow/50 h-5 w-5 rounded-md outline-none"
						id="cat4"
					/>
					<span className="text-Dark/75 cursor-pointer select-none text-base font-semibold">
						گرمایش و بخاری
					</span>
				</label>
				<label htmlFor="cat5" className="flex items-center gap-x-3">
					<input
						type="checkbox"
						className="accent-DarkYellow bg-DarkYellow/50 h-5 w-5 rounded-md outline-none"
						id="cat5"
					/>
					<span className="text-Dark/75 cursor-pointer select-none text-base font-semibold">
						ماشین ظرفشویی
					</span>
				</label>
				<label htmlFor="cat6" className="flex items-center gap-x-3">
					<input
						type="checkbox"
						className="accent-DarkYellow bg-DarkYellow/50 h-5 w-5 rounded-md outline-none"
						id="cat6"
					/>
					<span className="text-Dark/75 cursor-pointer select-none text-base font-semibold">
						ماشین لباسشویی
					</span>
				</label>
			</div>
		</div>
	);
};

// exports
export default ProductCategories;
