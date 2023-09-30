// react
import React from 'react';
import Switch from '@mui/material/Switch';

// icons
import { AiFillDollarCircle } from 'react-icons/ai';

// product price
const ProductPrice: React.FC = () => {
	// tsx
	return (
		<div className="bg-Info/50 hidden h-max w-[300px] flex-col items-center gap-y-5 rounded-3xl p-6 md:items-start xl:flex">
			<label htmlFor='' className="flex items-center font-Lalezar w-full text-lg justify-between flex-row ">
					<div className="flex justify-start w-2/3 p-2"><span>کالاهای تخفیف دار</span></div>
					<div className="flex justify-end w-1/3"><Switch defaultChecked color="warning" /></div>
			</label>


			{/* <div className="flex items-center gap-x-2">
				<AiFillDollarCircle className="text-3xl text-red-500" />
				<span className="font-Lalezar select-none text-sm md:text-2xl">انتخاب بازه قیمتی</span>
			</div>
			<div className="flex flex-col gap-y-4">
				<div className="flex flex-row items-center justify-center">
					<label className="flex flex-row items-center gap-x-3" htmlFor="min">
						<div className="flex items-center pr-5 text-base tracking-tighter">
							<span className="font-semibold">حداقل :</span>
						</div>
						<input
							className="focus:border-DarkYellow w-8/12 rounded-lg border-2 border-transparent px-4 py-2 text-right text-base transition-all focus:shadow-md focus:outline-none"
							placeholder="مثلا : ۹۹۹٫۹۹۹٫۹۹۹"
							type="text"
							id="min"
						/>
					</label>
				</div>
				<div className="flex flex-row items-center justify-center">
					<label className="flex flex-row items-center gap-x-3" htmlFor="max">
						<div className="flex items-center pr-5 text-base tracking-tighter">
							<span className="font-semibold">حداکثر :</span>
						</div>
						<input
							className="focus:border-DarkYellow w-8/12 rounded-lg border-2 border-transparent px-4 py-2 text-right text-base transition-all focus:shadow-md focus:outline-none"
							placeholder="مثلا: ۹۹۹٫۹۹۹٫۹۹۹"
							type="text"
							id="max"
						/>
					</label>
				</div>
			</div> */}
		</div>
	);
};

// exports
export default ProductPrice;
