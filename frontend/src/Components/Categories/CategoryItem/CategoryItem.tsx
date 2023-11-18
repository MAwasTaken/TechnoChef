// react
import { Link } from 'react-router-dom';

// types
import { CategoryItemProps } from '../../../Types/CategoryItems.types';

// redux
import { useDispatch } from 'react-redux';
import { setCategory } from '../../../Services/Redux/Slices/Category';

// category items
const CategoryItem: React.FC<CategoryItemProps> = (category) => {
	// redux dispatch hook
	const dispatch = useDispatch();

	// tsx
	return (
		<div
			className="group flex flex-col items-center justify-center gap-y-1 md:gap-y-1.5"
			onClick={() => dispatch(setCategory(category.Name))}
		>
			<Link
				to="/products"
				className="relative h-[50px] w-[50px] select-none md:h-[100px] md:w-[100px]"
			>
				<div
					className="absolute -z-10 h-full w-full rounded-full transition-opacity duration-1000 group-hover:opacity-0"
					style={{
						background: `linear-gradient(to right bottom, ${category.gradientColor}, #18181b)`,
						filter: `drop-shadow(0 1px 1px ${category.gradientColor}`
					}}
				></div>
				<div
					className="absolute -z-10 h-full w-full rounded-full opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
					style={{
						background: `linear-gradient(to right bottom, #18181b, ${category.gradientColor})`,
						filter: `drop-shadow(-1px 0 1px ${category.gradientColor}`
					}}
				></div>
				<div className="absolute -right-2 bottom-0 h-[65px] w-[65px] md:-right-3 md:h-[120px] md:w-[120px]">
					<img
						className="h-full w-full object-scale-down"
						src={`https://45.159.150.221:3000/${category.image}`}
						alt="category image"
            loading="lazy"
					/>
				</div>
			</Link>
			<Link
				to="/products"
				style={{ color: `${category.gradientColor}` }}
				className="font-Lalezar text-xs transition-all duration-500 md:text-lg"
			>
				{category.Name}
			</Link>
		</div>
	);
};

// exports
export default CategoryItem;
