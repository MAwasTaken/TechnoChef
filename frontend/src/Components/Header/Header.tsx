// react
import { Link } from 'react-router-dom';

// components
import GlobalSearch from '../GlobalSearch/GlobalSearch';

// header
const Header: React.FC = () => {
	// tsx
	return (
		// container
		<header className="container flex items-center justify-between py-4 text-xs md:py-8 md:text-lg">
			{/* right section */}
			<div className="font-Lalezar text-sm font-bold tracking-tight text-yellow-500 drop-shadow-[0_0_23px_#f97316] transition-all hover:text-orange-500 md:text-3xl">
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
					<li className="text-slate-300 decoration-red-500 decoration-[2.5px] underline-offset-8 transition-all hover:text-blue-500 hover:underline">
						<Link to="/">خانه</Link>
					</li>
					{/* products */}
					<li className="text-slate-300 decoration-red-500 decoration-[2.5px] underline-offset-8 transition-all hover:text-blue-500 hover:underline">
						<Link to="/">محصولات</Link>
					</li>
					{/* about us */}
					<li className="text-slate-300 decoration-red-500 decoration-[2.5px] underline-offset-8 transition-all hover:text-blue-500 hover:underline">
						<Link to="/">درباره‌ما</Link>
					</li>
				</ul>
			</div>
			{/* left section */}
			<div className="flex items-center justify-between gap-x-3 text-black md:gap-x-6">
				{/* search button */}
				<GlobalSearch />
				{/* login / register / panel button */}
				<button className="hover:text-black-100 relative flex justify-between gap-x-2 rounded-lg border border-orange-500 p-2.5 text-slate-300 hover:drop-shadow-[0_0_8px_#f97316] md:gap-x-4 md:border-2 md:p-2 md:px-5">
					{/* login */}
					<span className="">ورود</span>
					{/* divider */}
					<span className="absolute right-[27px] top-1 mr-3.5 h-3/4 w-px rounded-full bg-red-500 md:right-12 md:top-1.5 md:mx-3 md:w-[2px]">
						{' '}
					</span>
					{/* register */}
					<span className="mr-3 md:mr-2">ثبت‌نام</span>
				</button>
			</div>
		</header>
	);
};

// exports
export default Header;
