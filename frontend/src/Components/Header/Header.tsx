// react
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// components
import GlobalSearch from '../GlobalSearch/GlobalSearch';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../Services/Redux/Slices/User';
import { setCategory } from '../../Services/Redux/Slices/Category';

// react query
import useGetMe from '../../Hooks/useGetMe';

// icons
import { AiOutlineUser } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { BsBasket, BsBoxSeam, BsPeople } from 'react-icons/bs';
import { BiCategory } from 'react-icons/bi';
import { MdProductionQuantityLimits } from 'react-icons/md';

// react spinner
import { BeatLoader } from 'react-spinners';
import { reset } from '../../Services/Redux/Slices/PriceSort';

// header
const Header: React.FC = () => {
	// redux dispatch hook
	const dispatch = useDispatch();

	// GET user data when already login
	const { data, isFetching } = useGetMe();

	useEffect(() => {
		// set user data to redux global state
		dispatch(setUser(data));
	}, [data]);

	// GET user data from redux
	const user = useSelector((state: any) => state.user);

	// admin menu handler
	const [isAdminMenuShown, setIsAdminMenuShown] = useState<boolean>(false);

	// user menu handler
	const [isUserMenuShown, setIsUserMenuShown] = useState<boolean>(false);

	// tsx
	return (
		<>
			{/* container */}
			<header className="container flex items-center justify-between py-4 text-xs md:py-8 md:text-lg">
				{/* right section */}
				<div className="font-Lalezar text-LightYellow hover:text-DarkYellow text-sm font-bold tracking-tight transition-all sm:text-2xl md:text-3xl">
					{/* logo */}
					<Link to="/" className="flex flex-col items-center">
						TechnoShef
					</Link>
				</div>
				{/* center section */}
				<div>
					{/* navigation */}
					<ul className="flex items-center justify-between gap-x-4 text-sm text-black md:gap-x-12 md:text-xl">
						{/* home */}
						<li className="text-Dark decoration-red-500 decoration-[2.5px] underline-offset-8 transition-all hover:text-blue-600 hover:underline">
							<NavLink
								to="/"
								className={({ isActive }) => (isActive ? 'decoration-DarkYellow underline' : '')}
							>
								خانه
							</NavLink>
						</li>
						{/* products */}
						<li className="text-Dark decoration-red-500 decoration-[2.5px] underline-offset-8 transition-all hover:text-blue-600 hover:underline">
							<NavLink
								className={({ isActive }) => (isActive ? 'decoration-DarkYellow underline' : '')}
								to="/products"
								onClick={() => {
									dispatch(setCategory(''));
									dispatch(reset());
								}}
							>
								محصولات
							</NavLink>
						</li>
						{/* about us */}
						<li className="text-Dark decoration-red-500 decoration-[2.5px] underline-offset-8 transition-all hover:text-blue-600 hover:underline">
							<NavLink
								className={({ isActive }) => (isActive ? 'decoration-DarkYellow underline' : '')}
								to="/about-us"
							>
								درباره‌ما
							</NavLink>
						</li>
					</ul>
				</div>
				{/* left section */}
				<div className="flex items-center justify-between gap-x-2 sm:gap-x-1 md:gap-x-6">
					{/* search button */}
					<GlobalSearch />
					{/* login / register / panel button */}
					{isFetching ? (
						<>
							<Link
								to="/login"
								className="border-Dark/50 hidden sm:flex w-[75px] h-[30px] md:w-[141px] md:h-12 rounded-lg justify-center border px-4 md:border-2"
							>
								<div className="md:hidden sm:block hidden mt-2">
									<BeatLoader size={8} color="#FCA921" />
								</div>
								<div className="md:block hidden mt-3">
									<BeatLoader color="#FCA921" />
								</div>
							</Link>
							<div className="border-Dark/50 sm:hidden hover:border-Dark relative flex justify-between rounded-lg border p-1.5 transition-all hover:shadow-md md:gap-x-4 md:border-2 md:p-2 md:px-5">
								<AiOutlineUser className="sm:hidden text-DarkYellow" />
							</div>
						</>
					) : user._id && user.isAdmin === true ? (
						<button
							onClick={() => setIsAdminMenuShown(true)}
							className="border-DarkYellow relative flex justify-between rounded-lg border p-1.5 transition-all hover:shadow-md md:gap-x-4 md:border-2 md:p-2 md:px-5"
						>
							<AiOutlineUser className="sm:hidden" />
							<span className="hidden sm:block">
								{user.firstName} {user.lastName}
							</span>
						</button>
					) : user._id && user.isAdmin === false ? (
						<button
							onClick={() => setIsUserMenuShown(true)}
							className="border-DarkYellow relative flex justify-between rounded-lg border p-1.5 transition-all hover:shadow-md md:gap-x-4 md:border-2 md:p-2 md:px-5"
						>
							<AiOutlineUser className="sm:hidden" />
							<span className="hidden sm:block">
								{user.firstName} {user.lastName}
							</span>
						</button>
					) : (
						<Link
							to="/login"
							className="border-Dark/50 hover:border-Dark relative flex justify-between rounded-lg border p-1.5 transition-all hover:shadow-md md:gap-x-4 md:border-2 md:p-2 md:px-5"
						>
							<AiOutlineUser className="sm:hidden text-DarkYellow" />
							{/* login */}
							<span className="text-Dark hidden sm:block">ورود</span>
							{/* divider */}
							<span className="bg-DarkYellow hidden sm:block absolute right-[27px] top-1 mr-1  h-3/4 w-px rounded-full md:right-12 md:top-1.5 md:mx-3 md:mr-3.5 md:w-[2px]">
								{' '}
							</span>
							{/* register */}
							<span className="text-Dark hidden sm:block mr-2 md:mr-2">ثبت‌نام</span>
						</Link>
					)}
				</div>
			</header>
			{/* Admin menu */}
			<aside
				className={`fixed z-30 top-0 rounded-l-xl shadow-lg flex flex-col md:w-3/12 w-5/12 gap-y-2 bg-white/75 backdrop-blur-sm md:p-8 p-5 h-screen transition-all duration-1000 ${
					isAdminMenuShown ? 'right-0' : '-right-full'
				}`}
			>
				{/* menu title */}
				<Link
					to="/admin"
					className="flex border-b cursor-pointer border-Info pb-2 md:pb-4 gap-x-2 w-full items-center font-black justify-center text-LightYellow hover:text-DarkYellow xl:text-2xl md:text-[11px] lg:text-lg text-xs transition-colors"
				>
					تکنوشف | Technoshef
				</Link>
				{/* menu items */}
				<ul className="flex flex-col gap-y-2 text-xs pt-2 md:pt-4 lg:text-base child:transition-all text-Dark child:duration-500 child:rounded-md xl:text-lg">
					<li className="text-center" onClick={() => setIsAdminMenuShown(false)}>
						<Link
							to="/admin/products"
							className="py-1 rounded hover:bg-Info/50 tracking-tighter flex gap-x-2 justify-center items-center"
						>
							<BsBoxSeam className="text-red-500" />
							محصولات
						</Link>
					</li>
					<li className="text-center" onClick={() => setIsAdminMenuShown(false)}>
						<Link
							to="/admin/users"
							className="py-1 rounded hover:bg-Info/50 tracking-tighter flex gap-x-2 justify-center items-center"
						>
							<BsPeople className="text-red-500" />
							کاربران
						</Link>
					</li>
					<li className="text-center" onClick={() => setIsAdminMenuShown(false)}>
						<Link
							to="/admin/categories"
							className="py-1 rounded hover:bg-Info/50 tracking-tighter flex gap-x-2 justify-center items-center"
						>
							<BiCategory className="text-red-500" />
							دسته‌بندی ها
						</Link>
					</li>
					<li className="text-center" onClick={() => setIsAdminMenuShown(false)}>
						<Link
							to="/admin/orders"
							className="py-1 rounded hover:bg-Info/50 tracking-tighter flex gap-x-2 justify-center items-center"
						>
							<MdProductionQuantityLimits className="text-red-500" />
							سفارشات
						</Link>
					</li>
				</ul>
			</aside>
			{/* user menu */}
			<aside
				className={`fixed z-30 top-0 rounded-l-xl shadow-lg flex flex-col md:w-3/12 w-5/12 gap-y-2 bg-white/75 backdrop-blur-sm md:p-8 p-5 h-screen transition-all duration-1000 ${
					isUserMenuShown ? 'right-0' : '-right-full'
				}`}
			>
				{/* menu title */}
				<Link
					to="/panel"
					className="flex border-b cursor-pointer border-Info pb-2 md:pb-4 gap-x-2 w-full items-center font-black justify-center text-LightYellow hover:text-DarkYellow xl:text-2xl md:text-[11px] lg:text-lg text-xs transition-colors"
				>
					تکنوشف | Technoshef
				</Link>
				{/* menu items */}
				<ul className="flex flex-col gap-y-2 text-xs pt-2 md:pt-4 lg:text-base child:transition-all text-Dark child:duration-500 child:rounded-md xl:text-lg">
					<li className="text-center" onClick={() => setIsAdminMenuShown(false)}>
						<Link
							to={`/panel/${user.username}`}
							className="py-1 rounded hover:bg-Info/50 tracking-tighter flex gap-x-2 justify-center items-center"
						>
							<FiEdit className="text-red-500" />
							ویرایش اطلاعات کاربری
						</Link>
					</li>
					<li className="text-center" onClick={() => setIsAdminMenuShown(false)}>
						<Link
							to="/panel/basket"
							className="py-1 rounded hover:bg-Info/50 tracking-tighter flex gap-x-2 justify-center items-center"
						>
							<BsBasket className="text-red-500" />
							سبدخرید
						</Link>
					</li>
					<li className="text-center" onClick={() => setIsAdminMenuShown(false)}>
						<Link
							to="/panel/orders"
							className="py-1 rounded hover:bg-Info/50 tracking-tighter flex gap-x-2 justify-center items-center"
						>
							<MdProductionQuantityLimits className="text-red-500" />
							سفارشات
						</Link>
					</li>
				</ul>
			</aside>
			{/* overlay */}
			<div
				className={`bg-Dark/40 z-20 w-screen absolute top-0 left-0 ${
					isAdminMenuShown || isUserMenuShown ? 'visible' : 'hidden'
				}`}
				style={{ height: document.documentElement.scrollHeight }}
				onClick={() => {
					setIsAdminMenuShown(false);
					setIsUserMenuShown(false);
				}}
			></div>
		</>
	);
};

// exports
export default Header;
