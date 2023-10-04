// react
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

// components
import GlobalSearch from '../GlobalSearch/GlobalSearch';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../Services/Redux/Slices/User';

// react query
import useGetMe from '../../Hooks/useGetMe';

// icons
import { AiOutlineUser } from 'react-icons/ai';

// react spinner
import { BeatLoader } from 'react-spinners';

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

	const user = useSelector((state: any) => state.user);

	// tsx
	return (
		// container
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
				) : user._id ? (
					<Link
						to={user.isAdmin ? '/admin' : '/panel'}
						className="border-DarkYellow relative flex justify-between rounded-lg border p-1.5 transition-all hover:shadow-md md:gap-x-4 md:border-2 md:p-2 md:px-5"
					>
						<AiOutlineUser className="sm:hidden" />
						<span className="hidden sm:block">
							{user.firstName} {user.lastName}
						</span>
					</Link>
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
	);
};

// exports
export default Header;
