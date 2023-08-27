// types
import { ServiceItemProps } from '../../../Types/ServiceItems.types';

// service item
const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title }) => {
	// tsx
	return (
		<>
			<div className="flex flex-col items-center justify-center gap-y-1">
				{icon}
				<span className="font-Lalezar select-none text-xs text-gray-600 md:text-lg">
					{title}
				</span>
			</div>
		</>
	);
};

// exports
export default ServiceItem;
