// react
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// react icons
import { BiSearch } from 'react-icons/bi';

// redux
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../Services/Redux/Slices/Search';

// global search
const GlobalSearch: React.FC = () => {
	// navigator
	const navigate = useNavigate();

	// redux dispatch hook
	const dispatch = useDispatch();

	// search modal active state
	const [isShowSearchModal, setIsShowSearchModal] = useState<boolean>(false);

	// input reference
	const ref = useRef<HTMLInputElement>(null);

	// clear input and focus
	useEffect(() => {
		if (ref.current !== null) ref.current.value = '';

		ref.current?.focus();
	});

	// search button handler
	const closeModalHandler = () => setIsShowSearchModal(false);

  // search value
	const [search, setSearch] = useState<string>('');

	const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
		// prevent refreshing
		e.preventDefault();

		// dispatch search value
		dispatch(setSearchValue(search));

		// navigate to products page
		navigate('/products');

		// close search modal
		closeModalHandler();
	};

	// tsx
	return (
		<>
			<button onClick={() => setIsShowSearchModal(true)}>
				<BiSearch className="text-Dark/60 hover:text-Dark h-3 w-5 transition-all md:h-5 md:w-8" />
			</button>
			<div
				style={{ height: `${document.body.scrollHeight}px` }}
				className={`absolute right-0 top-0 z-40 flex w-screen items-center justify-center backdrop-blur ${
					isShowSearchModal ? '' : 'hidden'
				}`}
				onClick={closeModalHandler}
			></div>
			<form onSubmit={(e) => searchHandler(e)}>
				<input
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					ref={ref}
					placeholder="جستجو ..."
					type="search"
					className={`${
						isShowSearchModal ? '' : 'hidden'
					} bg-Light absolute right-1/2 top-1/2 z-50 h-10 w-60 -translate-y-1/2 translate-x-1/2 rounded-xl p-4 shadow-2xl shadow-Dark outline-none backdrop-blur md:h-14 md:w-2/6`}
				/>
			</form>
		</>
	);
};

// exports
export default GlobalSearch;
