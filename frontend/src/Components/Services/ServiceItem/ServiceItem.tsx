// types
import { ServiceItemProps } from '../../../Types/ServiceItemProps';

// service item
const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title }) => {
	// tsx
	return (
		<>
			<div className="flex flex-col items-center justify-center gap-y-1">
				{icon}
				<span className="font-Lalezar select-none text-xs transition-all duration-500 group-hover:drop-shadow-[0_0_2px_#71717a] md:text-lg">
					{title}
				</span>
			</div>
		</>
	);
};

// exports
export default ServiceItem;
