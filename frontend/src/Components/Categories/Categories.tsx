// components
import CategoryItem from './CategoryItem/CategoryItem';

// packages
import { BiCategoryAlt } from 'react-icons/bi';

// categories
const Categories = () => {
	// tsx
	return (
		<>
			<h2 className="font-Lalezar container mt-4 flex items-center gap-x-1 pt-4 text-sm text-yellow-500 drop-shadow-[0_0_8px_#f97316] md:mt-10 md:gap-x-4 md:text-3xl">
				<BiCategoryAlt className="text-pink-500" />
				دسته‌بندی‌ محصولات
			</h2>
			<section className="container md:mt-4 flex flex-wrap items-center justify-center gap-x-12 gap-y-5 md:py-8 py-4 md:gap-x-20 md:gap-y-20 lg:gap-x-32 xl:gap-x-48">
				<CategoryItem title='یخچال' gradientColor="#fb7185" imageSrc="/Images/Categories/fridge.png" />
				<CategoryItem title='ماشین لباس‌شویی' gradientColor="#f472b6" imageSrc="/Images/Categories/washing-machine.png" />
				<CategoryItem title='مایکرو ویو' gradientColor="#e879f9" imageSrc="/Images/Categories/microwave.png" />
				<CategoryItem title='اجاق گاز' gradientColor="#c084fc" imageSrc="/Images/Categories/oven.png" />
				<CategoryItem title='هود' gradientColor="#a78bfa" imageSrc="/Images/Categories/hood.png" />
				<CategoryItem title='ساید بای ساید' gradientColor="#818cf8" imageSrc="/Images/Categories/side-by-side.png" />
				<CategoryItem title='فریزر' gradientColor="#60a5fa" imageSrc="/Images/Categories/refrigerator.png" />
			</section>
		</>
	);
};

// exports
export default Categories;
