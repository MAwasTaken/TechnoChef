// components
import CategoryItem from './CategoryItem/CategoryItem';

// react query
import useCategories from '../../Hooks/useCategories';

// icons
import { BiCategoryAlt } from 'react-icons/bi';

// types
import { CategoryItemProps } from '../../Types/CategoryItems.types';

// categories
const Categories = () => {
	// GET all categories from react query
	const { data } = useCategories();

	// tsx
	return (
		<>
			<h2 className="font-Lalezar container mt-4 flex select-none items-center gap-x-1 pt-4 text-sm md:mt-10 md:gap-x-4 md:text-3xl">
				<BiCategoryAlt className="text-DarkYellow" />
				دسته‌بندی‌ محصولات
			</h2>
			<section className="container flex flex-wrap items-center justify-center gap-x-12 gap-y-5 py-4 md:mt-4 md:gap-x-20 md:gap-y-20 md:py-8 lg:gap-x-32 xl:gap-x-48">
				{data?.map((category: CategoryItemProps) => (
					<CategoryItem key={category._id} {...category} />
				))}
			</section>
		</>
	);
};

// exports
export default Categories;
