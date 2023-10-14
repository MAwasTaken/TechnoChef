// react
import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
// icons
import { BiSort } from 'react-icons/bi';
import { BiCategory } from 'react-icons/bi';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../Services/Redux/Slices/Category';
import useCategories from '../../Hooks/useCategories';
import { CategoryItemProps } from '../../Types/CategoryItems.types';
import { acceding, descending, reset } from '../../Services/Redux/Slices/PriceSort';

// tsx
const ProductSort: React.FC = () => {
	// show & hide mobile modal
	const [shownFilters, setShownFilters] = useState<Boolean>(false);

	// redux dispatch hook
	const dispatch = useDispatch();

	// GET categories from redux
	const currentCategory = useSelector((state: any) => state.category);

	// GET categories from redux
	const currentSort = useSelector((state: any) => state.priceSort);

	// price sort
	const priceSort = useSelector((state: any) => state.priceSort);

	// GET all categories from react query
	const { data } = useCategories();

	// change category
	const changeCategoryHandler = (categoryName: string) => {
		if (currentCategory === categoryName) dispatch(setCategory(''));
		else dispatch(setCategory(categoryName));
	};

	// change sort
	const changeSortHandler = (sortValue: number) =>
		currentSort != sortValue
			? sortValue === 1
				? dispatch(acceding())
				: dispatch(descending())
			: dispatch(reset());

	// tsx
	return (
		<>
			<div className="bg-slate-300 relative flex flex-col items-center gap-y-3 rounded-xl p-5 md:p-4 xl:h-20 xl:flex-row xl:gap-x-5 xl:rounded-3xl xl:p-9">
				<button
					className="from-LightYellow to-DarkYellow absolute right-5 flex items-center gap-x-1 rounded-lg bg-gradient-to-tl px-2 py-1 hover:bg-gradient-to-br md:right-10 md:top-1/2 md:-translate-y-1/2 md:rounded-xl md:px-4 md:py-2 xl:hidden"
					onClick={() => setShownFilters(true)}
				>
					<div>
						<HiOutlineAdjustmentsHorizontal className="text-xl text-red-500 md:text-3xl" />
					</div>
					<span className="font-Lalezar select-none text-base sm:text-lg md:text-xl">فیلتر‌ها</span>
				</button>
				<div className="flex items-center gap-x-1">
					<BiSort className="text-xl text-red-500 md:text-3xl" />
					<span className="font-Lalezar select-none text-lg sm:text-xl md:text-2xl">
						مرتب سازی :
					</span>
				</div>
				<ul className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2">
					<li
						className={`flex cursor-pointer items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold tracking-tighter transition duration-500 xl:px-7 xl:py-3 xl:text-base ${
							priceSort === ''
								? 'from-LightYellow to-DarkYellow bg-gradient-to-br'
								: 'bg-Light/75 hover:bg-Info/50'
						}`}
						onClick={() => dispatch(reset())}
					>
						پیش‌فرض
					</li>
					<li
						className={`flex cursor-pointer items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold tracking-tighter transition duration-500 xl:px-7 xl:py-3 xl:text-base ${
							priceSort === '1'
								? 'from-LightYellow to-DarkYellow bg-gradient-to-br'
								: 'bg-Light/75 hover:bg-Info/50'
						}`}
						onClick={() => changeSortHandler(1)}
					>
						ارزان ترین
					</li>
					<li
						className={`flex cursor-pointer items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold tracking-tighter transition duration-500 xl:px-7 xl:py-3 xl:text-base ${
							priceSort === '-1'
								? 'from-LightYellow to-DarkYellow bg-gradient-to-br'
								: 'bg-Light/75 hover:bg-Info/50'
						}`}
						onClick={() => changeSortHandler(-1)}
					>
						گران ترین
					</li>
					{/* <li className="bg-Light/75 hover:bg-Info/90 flex cursor-pointer items-center  justify-center rounded-xl px-4 py-2 text-sm font-semibold tracking-tighter transition duration-300 xl:px-7 xl:py-3 xl:text-base">
						تخفیف دارها
					</li> */}
				</ul>
			</div>
			{/* overlay */}
			<div
				className={`bg-Dark/50 absolute left-0 top-0 z-40 block w-screen backdrop-blur transition-all duration-500 xl:hidden ${
					!shownFilters ? 'hidden opacity-0' : 'opacity-100'
				}`}
				onClick={() => setShownFilters(!shownFilters)}
				style={{ height: document.documentElement.scrollHeight }}
			></div>
			{/* menu */}
			<div
				className={`fixed left-0 z-50 block h-auto w-screen rounded-t-2xl bg-white px-5 py-10 transition-all duration-500 xl:hidden ${
					!shownFilters ? '-bottom-full' : 'bottom-0'
				}`}
			>
				{/* categories */}
				<div className="flex flex-col gap-y-3">
					<div className="flex items-center gap-x-2">
						<BiCategory className="text-2xl text-red-500 md:text-3xl" />
						<span className="font-Lalezar select-none text-xl md:text-2xl">دسته بندی محصولات</span>
					</div>
					<div className="grid grid-cols-12 gap-y-2 px-[5%] sm:gap-y-3 md:gap-y-4">
						{data?.map((category: CategoryItemProps) => (
							<label
								key={category._id}
								htmlFor={category.shortName}
								className="col-span-6 flex items-center gap-x-2"
							>
								<input
									type="checkbox"
									className="accent-DarkYellow bg-DarkYellow/50 h-4 w-4 rounded-md outline-none"
									id={category.shortName}
									onChange={() => changeCategoryHandler(category.Name)}
									checked={currentCategory.includes(category.Name)}
								/>
								<span className="text-Dark/75 cursor-pointer select-none text-base font-semibold tracking-tight">
									{category.Name}
								</span>
							</label>
						))}
					</div>
				</div>
				{/* divider */}
				<span className="border-Info mx-auto my-5 block h-[2px] w-full border-b-2"></span>
				{/* prices */}
				<label
					htmlFor=""
					className="flex items-center font-Lalezar w-full text-lg justify-between flex-row "
				>
					<div className="flex justify-start w-2/3 p-2">
						<span>کالاهای تخفیف دار</span>
					</div>
					<div className="flex justify-end w-1/3">
						<Switch defaultChecked color="warning" />
					</div>
				</label>
				{/* <div className="flex flex-col gap-y-3">
					<div className="flex items-center gap-x-2">
						<AiFillDollarCircle className="text-2xl text-red-500 md:text-3xl" />
						<span className="font-Lalezar select-none text-xl md:text-2xl">انتخاب بازه قیمتی</span>
					</div>
					<div className="grid grid-cols-12 gap-y-3">
						<label
							className="col-span-12 flex flex-row items-center justify-center gap-x-3 md:col-span-6"
							htmlFor="mobile-min"
						>
							<div className="flex items-center pr-5 text-base tracking-tighter">
								<span className="font-semibold">حداقل :</span>
							</div>
							<input
								className="focus:border-DarkYellow bg-Info/40 w-auto rounded-lg border-2 border-transparent px-4 py-2 text-right text-base transition-all focus:shadow-md focus:outline-none"
								placeholder="مثلا : ۹۹۹٫۹۹۹٫۹۹۹"
								type="text"
								id="mobile-min"
							/>
						</label>
						<label
							className="col-span-12 flex flex-row items-center justify-center gap-x-3 md:col-span-6"
							htmlFor="mobile-max"
						>
							<div className="flex items-center pr-5 text-base tracking-tighter">
								<span className="font-semibold">حداکثر :</span>
							</div>
							<input
								className="focus:border-DarkYellow bg-Info/40 w-auto rounded-lg border-2 border-transparent px-4 py-2 text-right text-base transition-all focus:shadow-md focus:outline-none"
								placeholder="مثلا : ۹۹۹٫۹۹۹٫۹۹۹"
								type="text"
								id="mobile-max"
							/>
						</label>
					</div>
				</div> */}
			</div>
		</>
	);
};

// exports
export default ProductSort;
