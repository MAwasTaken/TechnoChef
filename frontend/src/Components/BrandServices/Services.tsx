// packages
import {
	PiMedalDuotone,
	PiHeadsetDuotone,
	PiRocketLaunchDuotone,
	PiVaultDuotone,
	PiAtomDuotone
} from 'react-icons/pi';

// components
import ServiceItem from './ServiceItem/ServiceItem';

// services
const Services = () => {
	// tsx
	return (
		<section className="container flex flex-wrap items-center justify-evenly gap-x-20 gap-y-5 md:py-4 py-3">
			<ServiceItem
				icon={<PiMedalDuotone className="h-10 w-10 text-Dark/60 sm:h-14 sm:w-14 md:h-20 md:w-20" />}
				title="ضمانت اصالت کالا"
			/>
			<ServiceItem
				icon={
					<PiRocketLaunchDuotone className="h-10 w-10 text-Dark/60 sm:h-14 sm:w-14 md:h-20 md:w-20" />
				}
				title="تحویل سریع"
			/>
			<ServiceItem
				icon={
					<PiHeadsetDuotone className="h-10 w-10 text-Dark/60 sm:h-14 sm:w-14 md:h-20 md:w-20" />
				}
				title="پشتیبانی دائمی"
			/>
			<ServiceItem
				icon={<PiAtomDuotone className="h-10 w-10 text-Dark/60 sm:h-14 sm:w-14 md:h-20 md:w-20" />}
				title="تجربه خرید فوق العاده"
			/>
			<ServiceItem
				icon={<PiVaultDuotone className="h-10 w-10 text-Dark/60 sm:h-14 sm:w-14 md:h-20 md:w-20" />}
				title="قیمت منصفانه"
			/>
		</section>
	);
};

// exports
export default Services;
