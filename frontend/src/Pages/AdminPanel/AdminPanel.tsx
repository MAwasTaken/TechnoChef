// react
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

// components
import AdminSide from '../../Components/AdminPanel/AdminSide/AdminSide';
import AdminHeader from '../../Components/AdminPanel/AdminHeader/AdminHeader';

// admin panel
const AdminPanel: React.FC = () => {
	// mounting side effects
	useEffect(() => {
		// change document title
		document.title = `تکنو | Technoshef - پنل ادمین`;

		// scroll to top when mounting
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, []);

	const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

	// tsx
	return (
		<>
			<AdminSide isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
			<main className="md:w-9/12 w-full left-0 absolute">
				<AdminHeader setIsMenuShown={setIsMenuShown} />
				<Outlet />
			</main>
		</>
	);
};

// exports
export default AdminPanel;
