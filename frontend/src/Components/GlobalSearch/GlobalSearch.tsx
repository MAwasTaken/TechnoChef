import { useState } from 'react';

// react icons
import { BiSearch } from 'react-icons/bi';

// global search
const GlobalSearch: React.FC = () => {
	// search modal active state
	const [isShowSearchModal, setIsShowSearchModal] = useState<boolean>(false);

	// search button handler
	const closeModalHandler = () => setIsShowSearchModal(false);

	// tsx
	return (
		<>
			<button onClick={() => setIsShowSearchModal(true)}>
				<BiSearch className="h-5 w-5 text-pink-500 transition-all hover:text-purple-500 hover:drop-shadow-[0_0_8px_#f97316] md:h-8 md:w-8" />
			</button>
			<div
				className={`absolute right-0 top-0 z-40 flex h-full w-screen items-center justify-center backdrop-blur-[3px] ${
					isShowSearchModal ? '' : 'hidden'
				}`}
				onClick={closeModalHandler}
			></div>
			<input
				placeholder="جستجو ..."
				type="search"
				className={`${
					isShowSearchModal ? '' : 'hidden'
				} absolute right-1/2 top-1/2 z-50 h-10 w-48 -translate-y-1/2 translate-x-1/2 rounded-xl bg-gray-950 p-4 text-yellow-500 shadow-md shadow-slate-200/10 outline-none backdrop-blur md:h-14 md:w-2/6`}
			/>
		</>
	);
};

// exports
export default GlobalSearch;
