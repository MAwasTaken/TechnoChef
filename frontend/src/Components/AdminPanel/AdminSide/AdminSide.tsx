// react
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
				className={`fixed z-30 md:right-0 top-0 rounded-l-xl md:rounded-none shadow-lg flex flex-col md:w-3/12 w-5/12 gap-y-2 bg-gray-200 md:p-8 p-5 h-screen transition-all duration-1000 ${
					isMenuShown ? 'right-0' : '-right-full'
				}`}
			>
				{/* menu title */}
				<Link
					to="/"
					className="flex border-b border-Info pb-2 md:pb-4 gap-x-2 w-full items-center font-black justify-center text-DarkYellow xl:text-2xl md:text-[11px] lg:text-lg text-xs"
				>
					تکنوشف | Technoshef
				</Link>
				{/* menu items */}
				<ul className="flex flex-col gap-y-2 text-xs pt-2 md:pt-4 lg:text-base child:transition-all text-Dark child:duration-500 child:rounded-md xl:text-lg">
					<li className="text-center">
						<NavLink
							to="products"
							className={({ isActive }) =>
								`block py-1 rounded hover:bg-Info/50 ${
									isActive ? 'bg-DarkYellow/50 hover:bg-DarkYellow/50' : 'hover:bg-Info/50'
								} `
							}
						>
							محصولات
						</NavLink>
					</li>
					<li className="text-center">
						<NavLink
							to="users"
							className={({ isActive }) =>
								`block py-1 rounded ${
									isActive ? 'bg-DarkYellow/50 hover:bg-DarkYellow/50' : 'hover:bg-Info/50'
								} `
							}
						>
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
