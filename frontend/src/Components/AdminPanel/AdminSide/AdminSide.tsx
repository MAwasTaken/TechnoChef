// react
import { Link, NavLink } from 'react-router-dom';

// icons
import { BsBoxSeam, BsPeople } from 'react-icons/bs';

// admin side
const AdminSide: React.FC<{
	isMenuShown: boolean;
	setIsMenuShown: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isMenuShown, setIsMenuShown }) => {
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
							to="products"
							className={({ isActive }) =>
								`py-1 rounded hover:bg-Info/50 tracking-tighter flex gap-x-2 justify-center items-center ${
									isActive
										? 'bg-DarkYellow/50 hover:bg-DarkYellow/50 font-semibold'
										: 'hover:bg-Info/50'
								} `
							}
						>
							<BsBoxSeam className="text-red-500" />
							محصولات
						</NavLink>
					</li>
					<li className="text-center" onClick={() => setIsMenuShown(false)}>
						<NavLink
							to="users"
							className={({ isActive }) =>
								`flex justify-center items-center tracking-tighter gap-x-2 py-1 rounded  ${
									isActive
										? 'bg-DarkYellow/50 hover:bg-DarkYellow/50 font-semibold'
										: 'hover:bg-Info/50'
								} `
							}
						>
							<BsPeople className="text-red-500" />
							کاربران
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

export default AdminSide;
