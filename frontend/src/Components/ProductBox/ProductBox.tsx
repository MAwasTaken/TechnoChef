// react
import { useState } from 'react';
import { Link } from 'react-router-dom';

// packages
import { BiChevronLeft } from 'react-icons/bi';

// types
import { ProductProps } from '../../Types/Products.types';

// helpers
import toFarsiNumber from '../../Utils/toFarsiNumber';

// product box
const ProductBox: React.FC<ProductProps> = ({
	productColor,
	images,
	discount,
	price,
	productName
}) => {
	// product hovering
	const [isProductHover, setIsProductHover] = useState<boolean>(false);

	// tsx
	return (
		<>
			<div className="bg-Dark/70 hover:shadow-Dark/30 relative h-[245px] w-[150px] select-none rounded-xl shadow-md duration-500 hover:-translate-y-[2px] hover:shadow-lg md:h-[295px] md:w-[215px]">
				<div className="flex h-auto flex-col p-2 w-full md:p-4">
					<div className="absolute left-2 flex flex-col gap-y-1">
						{productColor?.map((color, index) => (
							<span
								key={index}
								className="border-Dark/70 block h-3 w-3 rounded-full border"
								style={{ backgroundColor: color }}
							></span>
						))}
					</div>
					<Link to="/">
						{images ? (
							<img
								className="mx-auto h-[134px] w-[134px] md:h-[150px] md:w-[150px]"
								src={`http://localhost:3000/${images[0]}`}
								alt="تصویر محصول"
								loading="lazy"
							/>
						) : null}
						<span className="text-Light/80 mt-1 line-clamp-2 md:h-14 h-10 text-center text-sm font-bold tracking-tighter md:text-lg">
							{productName ? toFarsiNumber(productName) : ''}
						</span>
					</Link>
					<div className="mt-3 flex items-center justify-between">
						{discount ? (
							<span className="h-5 w-7 rounded-lg bg-gradient-to-l from-red-500 to-red-600 pt-[3px] text-center text-[10px] font-bold text-white/70 md:h-6 md:w-9 md:pt-1 md:text-xs">
								{discount.toLocaleString('fa-IR')}
							</span>
						) : null}
						<span className="line font-Lalezar mt-1 text-left font-bold tracking-tight text-red-500/80 line-through md:text-lg">
							{price?.toLocaleString('fa-IR')}
						</span>
					</div>
				</div>
				<Link
					to="/"
					className="hover:shadow-product from-LightYellow to-DarkYellow shadow-LightYellow/50 absolute -bottom-3 right-5 z-10 flex h-[25px] w-[110px] cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r transition-shadow md:-bottom-[15px] md:right-9 md:h-[34px] md:w-[140px]"
					onMouseEnter={() => setIsProductHover(true)}
					onMouseLeave={() => setIsProductHover(false)}
				>
					{isProductHover ? (
						<>
							<span className="font-Lalezar text-sm text-black/70 md:mt-1 md:text-lg">
								مشاهده جزئیات
							</span>
							<BiChevronLeft className="h-5 w-5 text-red-600" />
						</>
					) : (
						<>
							<span className="font-Lalezar text-sm text-black/70 md:mt-1 md:text-xl">
								{(((100 - discount) * price) / 100).toLocaleString('fa-IR')}
							</span>
							<div className="h-4 w-4 text-red-600">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="currentColor">
									<path
										d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
										clipRule="evenodd"
									></path>
								</svg>
							</div>
						</>
					)}
				</Link>
			</div>
		</>
	);
};

// exports
export default ProductBox;
