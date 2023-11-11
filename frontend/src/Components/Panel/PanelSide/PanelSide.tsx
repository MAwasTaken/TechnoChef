// react
import { Link, NavLink } from 'react-router-dom';

// icons
import { FiEdit } from 'react-icons/fi';

// redux
import { useSelector } from 'react-redux';
import { BsBasket } from 'react-icons/bs';
import { MdProductionQuantityLimits } from 'react-icons/md';

// admin side
const PanelSide: React.FC<{
	isMenuShown: boolean;
	setIsMenuShown: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isMenuShown, setIsMenuShown }) => {
	// GET user infos from redux
	const user: {
		_id: string;
		username: string;
		firstName: string;
		lastName: string;
		phoneNumber: string;
		email: string;
		postalCode?: string;
		nationalCode?: string;
		address?: string;
		emailVerified: boolean;
		createdAt: string;
		updatedAt: string;
		isAdmin: boolean;
	} = useSelector((state: any) => state.user);

	// tsx
	return (
		<>
			{/* menu */}
			<aside
				className={`fixed z-30 md:right-0 top-0 rounded-l-xl md:rounded-none shadow-lg flex flex-col md:w-3/12 w-5/12 gap-y-2 bg-white/75 md:bg-gray-200 backdrop-blur-sm md:p-8 p-5 h-screen transition-all duration-1000 ${
					isMenuShown ? 'right-0' : '-right-full'
				}`}
			>
				{/* menu title */}
				<Link
					to="/"
					className="flex border-b border-Info pb-2 md:pb-4 gap-x-2 w-full items-center font-black justify-center text-LightYellow hover:text-DarkYellow xl:text-2xl md:text-[11px] lg:text-lg text-xs"
				>
					تکنوشف | Technoshef
				</Link>
				{/* menu items */}
				<ul className="flex flex-col gap-y-2 text-xs pt-2 md:pt-4 lg:text-base child:transition-all text-Dark child:duration-500 child:rounded-md xl:text-lg">
					<li className="text-center" onClick={() => setIsMenuShown(false)}>
						<NavLink
							to={user.username}
							className={({ isActive }) =>
								`py-1 rounded hover:bg-Info/50 tracking-tighter flex gap-x-2 justify-center items-center ${
									isActive
										? 'bg-DarkYellow/50 hover:bg-DarkYellow/50 font-semibold'
										: 'hover:bg-Info/50'
								} `
							}
						>
							<FiEdit className="text-red-500" />
							ویرایش اطلاعات کاربری
						</NavLink>
					</li>
					<li className="text-center" onClick={() => setIsMenuShown(false)}>
						<NavLink
							to="basket"
							className={({ isActive }) =>
								`py-1 rounded hover:bg-Info/50 tracking-tighter flex gap-x-2 justify-center items-center ${
									isActive
										? 'bg-DarkYellow/50 hover:bg-DarkYellow/50 font-semibold'
										: 'hover:bg-Info/50'
								} `
							}
						>
							<BsBasket className="text-red-500" />
							سبدخرید
						</NavLink>
					</li>
					<li className="text-center" onClick={() => setIsMenuShown(false)}>
						<NavLink
							to="orders"
							className={({ isActive }) =>
								`py-1 rounded hover:bg-Info/50 tracking-tighter flex gap-x-2 justify-center items-center ${
									isActive
										? 'bg-DarkYellow/50 hover:bg-DarkYellow/50 font-semibold'
										: 'hover:bg-Info/50'
								} `
							}
						>
							<MdProductionQuantityLimits className="text-red-500" />
							سفارشات
						</NavLink>
					</li>
				</ul>
			</aside>
			{/* overlay */}
			<div
				className={`bg-Dark/40 md:hidden z-20 w-screen absolute top-0 left-0 ${
					isMenuShown ? 'visible' : 'hidden'
				}`}
				style={{ height: document.documentElement.scrollHeight }}
				onClick={() => setIsMenuShown(false)}
			></div>
		</>
	);
};

export default PanelSide;
