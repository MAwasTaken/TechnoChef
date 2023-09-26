// react
import React, { useState } from 'react';

// icons
import { BiSort } from 'react-icons/bi';
import { BiCategory } from 'react-icons/bi';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';
import { AiFillDollarCircle } from 'react-icons/ai';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../Services/Redux/Slices/Category';

// tsx
const ProductSort: React.FC = () => {
	// show & hide mobile modal
	const [shownFilters, setShownFilters] = useState<Boolean>(false);

	// redux dispatch hook
	const dispatch = useDispatch();

	// GET categories from redux
	const category = useSelector((state: any) => state.category);

	// change category
	const changeCategoryHandler = (categoryName: string) => {
		category === categoryName ? dispatch(setCategory('')) : dispatch(setCategory(categoryName));

		// setShownFilters(false);
	};

	// tsx
	return (
		<>
			<div className="bg-Info/50 relative flex flex-col items-center gap-y-3 rounded-xl p-5 md:p-4 xl:h-20 xl:flex-row xl:gap-x-5 xl:rounded-3xl xl:p-9">
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
					<li className="from-LightYellow to-DarkYellow flex cursor-pointer items-center justify-center rounded-xl bg-gradient-to-br px-4 py-2 text-sm font-semibold tracking-tighter transition duration-300 xl:px-7 xl:py-3 xl:text-base">
						ارزان ترین
					</li>
					<li className="bg-Light/75 hover:bg-Info/90 flex cursor-pointer items-center  justify-center rounded-xl px-4 py-2 text-sm font-semibold tracking-tighter transition duration-300 xl:px-7 xl:py-3 xl:text-base">
						گران ترین
					</li>
					<li className="bg-Light/75 hover:bg-Info/90 flex cursor-pointer items-center  justify-center rounded-xl px-4 py-2 text-sm font-semibold tracking-tighter transition duration-300 xl:px-7 xl:py-3 xl:text-base">
						تخفیف دارها
					</li>
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
						<label htmlFor="mobile-cat1" className="col-span-6 flex items-center gap-x-2">
							<input
								type="checkbox"
								className="accent-DarkYellow bg-DarkYellow/50 h-4 w-4 rounded-md outline-none"
								id="mobile-cat1"
								onChange={() => changeCategoryHandler('برودتی')}
								checked={category.includes('برودتی')}
							/>
							<span className="text-Dark/75 cursor-pointer select-none text-base font-semibold tracking-tight">
								یخچال ها و برودتی
							</span>
						</label>
						<label htmlFor="mobile-cat2" className="col-span-6 flex items-center gap-x-2">
							<input
								type="checkbox"
								className="accent-DarkYellow bg-DarkYellow/50 h-4 w-4 rounded-md outline-none"
								id="mobile-cat2"
								onChange={() => changeCategoryHandler('سرمایشی')}
								checked={category.includes('سرمایشی')}
							/>
							<span className="text-Dark/75 cursor-pointer select-none text-base font-semibold tracking-tight">
								مایکروویو
							</span>
						</label>
						<label htmlFor="mobile-cat3" className="col-span-6 flex items-center gap-x-2">
							<input
								type="checkbox"
								className="accent-DarkYellow bg-DarkYellow/50 h-4 w-4 rounded-md outline-none"
								id="mobile-cat3"
							/>
							<span className="text-Dark/75 cursor-pointer select-none text-base font-semibold tracking-tight">
								گاز رومیزی و جدا
							</span>
						</label>
						<label htmlFor="mobile-cat4" className="col-span-6 flex items-center gap-x-2">
							<input
								type="checkbox"
								className="accent-DarkYellow bg-DarkYellow/50 h-4 w-4 rounded-md outline-none"
								id="mobile-cat4"
							/>
							<span className="text-Dark/75 cursor-pointer select-none text-base font-semibold tracking-tight">
								گرمایش و بخاری
							</span>
						</label>
						<label htmlFor="mobile-cat5" className="col-span-6 flex items-center gap-x-2">
							<input
								type="checkbox"
								className="accent-DarkYellow bg-DarkYellow/50 h-4 w-4 rounded-md outline-none"
								id="mobile-cat5"
							/>
							<span className="text-Dark/75 cursor-pointer select-none text-base font-semibold tracking-tight">
								ماشین ظرفشویی
							</span>
						</label>
						<label htmlFor="mobile-cat6" className="col-span-6 flex items-center gap-x-2">
							<input
								type="checkbox"
								className="accent-DarkYellow bg-DarkYellow/50 h-4 w-4 rounded-md outline-none"
								id="mobile-cat6"
							/>
							<span className="text-Dark/75 cursor-pointer select-none text-base font-semibold tracking-tight">
								ماشین لباسشویی
							</span>
						</label>
					</div>
				</div>
				{/* divider */}
				<span className="border-Info mx-auto my-5 block h-[2px] w-full border-b-2"></span>
				{/* prices */}
				<div className="flex flex-col gap-y-3">
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
				</div>
			</div>
		</>
	);
};

// exports
export default ProductSort;
