// react
import React from 'react';

// icons
import { BiCategory } from 'react-icons/bi';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../Services/Redux/Slices/Category';

// react query
import useCategories from '../../Hooks/useCategories';
import { CategoryItemProps } from '../../Types/CategoryItems.types';

// products categories
const ProductCategories: React.FC = () => {
	// redux dispatch hook
	const dispatch = useDispatch();

	// GET all categories from react query
	const { data } = useCategories();

	// GET categories from redux
	const currentCategory = useSelector((state: any) => state.category);

	// change category
	const changeCategoryHandler = (categoryName: string) =>
		currentCategory === categoryName
			? dispatch(setCategory(''))
			: dispatch(setCategory(categoryName));

	// tsx
	return (
		<div className="bg-slate-300 hidden h-max flex-col gap-y-5 rounded-3xl p-6 xl:flex xl:w-[300px]">
			<div className="flex items-center gap-x-2">
				<BiCategory className="text-3xl text-red-500" />
				<span className="font-Lalezar select-none md:text-2xl">دسته بندی محصولات</span>
			</div>
			<div className="mr-8 flex flex-col gap-y-6">
				{data?.map((category: CategoryItemProps) => (
					<label
						key={category._id}
						htmlFor={category.shortName}
						className="flex items-center gap-x-3"
					>
						<input
							type="checkbox"
							className="accent-DarkYellow bg-DarkYellow/50 h-5 w-5 rounded-md outline-none"
							id={category.shortName}
							onChange={() => changeCategoryHandler(category.Name)}
							checked={category.Name === currentCategory}
						/>
						<span className="text-Dark/75 cursor-pointer select-none text-base font-semibold">
							{category.Name}
						</span>
					</label>
				))}
			</div>
		</div>
	);
};

// exports
export default ProductCategories;
