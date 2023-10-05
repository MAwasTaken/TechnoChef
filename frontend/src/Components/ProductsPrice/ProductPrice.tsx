// react
import React from 'react';
import Switch from '@mui/material/Switch';

// icons
import { AiFillDollarCircle } from 'react-icons/ai';

// product price
const ProductPrice: React.FC = () => {
	// tsx
	return (
		<div className="bg-slate-300 hidden h-max w-[300px] flex-col items-center gap-y-5 rounded-3xl p-6 md:items-start xl:flex">
			<label htmlFor='' className="flex items-center font-Lalezar w-full text-lg justify-between flex-row ">
					<div className="flex justify-start w-2/3 p-2"><span>کالاهای تخفیف دار</span></div>
					<div className="flex justify-end w-1/3"><Switch defaultChecked color="warning" /></div>
			</label>
		</div>
	);
};

// exports
export default ProductPrice;
