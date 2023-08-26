// react
import { Link } from 'react-router-dom';

// types
import { CategoryItemProps } from '../../../Types/CategoryItems.types';

// category items
const CategoryItem: React.FC<CategoryItemProps> = ({ gradientColor, imageSrc, title }) => {
	// tsx
	return (
		<div className="group flex flex-col items-center justify-center gap-y-1 md:gap-y-1.5">
			<Link to="" className="relative h-[50px] w-[50px] select-none md:h-[100px] md:w-[100px]">
				<div
					className="absolute -z-10 h-full w-full rounded-full transition-opacity duration-1000 group-hover:opacity-0"
					style={{
						background: `linear-gradient(to right bottom, ${gradientColor}, #18181b)`,
						filter: `drop-shadow(0 1px 1px ${gradientColor}`
					}}
				></div>
				<div
					className="absolute -z-10 h-full w-full rounded-full opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
					style={{
						background: `linear-gradient(to right bottom, #18181b, ${gradientColor})`,
						filter: `drop-shadow(-1px 0 1px ${gradientColor}`
					}}
				></div>
				<div className="absolute -right-2 bottom-0 h-[65px] w-[65px] md:-right-3 md:h-[120px] md:w-[120px]">
					<img className="h-full w-full object-scale-down" src={imageSrc} alt="category image" />
				</div>
			</Link>
			<Link
				to=""
				style={{ color: `${gradientColor}` }}
				className="font-Lalezar text-xs transition-all duration-500 group-hover:drop-shadow-[0_0_2px_#71717a] md:text-lg"
			>
				{title}
			</Link>
		</div>
	);
};

// exports
export default CategoryItem;
