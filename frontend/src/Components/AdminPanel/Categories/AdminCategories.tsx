// react
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// icons
import { BiCategory } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';

// react query
import useCategories from '../../../Hooks/useCategories';
import { CategoryItemProps } from '../../../Types/CategoryItems.types';

const AdminCategories: React.FC = () => {
	// navigator
	const navigate = useNavigate();

	// get all categories
	const { data } = useCategories();

	return (
		<section className="md:p-5 p-3">
			{/* header */}
			<h3 className="flex justify-between items-center border-b border-Info pb-3">
				<span className="flex select-none transition-colors items-center gap-x-2 text-xl md:text-2xl lg:text-3xl font-Lalezar tracking-wider">
					<BiCategory className="text-red-500" />
					دسته‌بندی ها
				</span>
				<Link
					to="create"
					className="md:border-2 border text- duration-500 transition-all border-Info p-1 md:p-1.5 border-dashed rounded-md hover:bg-Info/50 flex tracking-tighter gap-x-2 items-center justify-center"
				>
					<span className="hidden md:block">افزودن دسته‌بندی جدید</span>
					<BsPlusLg className="text-red-500 w-5 h-5" />
				</Link>
			</h3>
			{/* table */}
			<table className="table-auto mt-3 md:mt-5 border md:border-2 border-Info w-full text-center">
				<thead className="border-b-2 h-10 border-Info">
					<tr className="">
						<td className="sm:text-sm font-black text-Dark/70 h-10">ردیف</td>
						<td className="sm:text-sm font-black text-Dark/70 h-10">تصویر</td>
						<td className="sm:text-sm font-black text-Dark/70 h-10">عنوان</td>
						<td className="sm:text-sm font-black text-Dark/70 h-10">پسوند</td>
					</tr>
				</thead>
				<tbody>
					{data?.reverse().map((category: CategoryItemProps, index: number) => (
						<tr
							key={category._id}
							className="border-b border-DarkYellow hover:bg-Info/20 p-52 transition-all duration-500 cursor-pointer h-20"
							onClick={() => navigate(String(category.href))}
						>
							<td className="font-Lalezar text-base lg:text-lg">{index + 1}</td>
							<td>
								<img
									className="w-32 h-32 object-contain mx-auto"
									src={`https://www.technoshef.com/api/${category.image}`}
									alt="category image"
									loading="lazy"
								/>
							</td>
							<td className="tracking-tighter sm:text-base">{category.Name}</td>
							<td className="tracking-tighter sm:text-base">{category.href}</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
};

export default AdminCategories;
