// react
import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

// components
import AdminSide from '../../Components/AdminPanel/AdminSide/AdminSide';

import { useSelector } from 'react-redux';

import { FaBars, FaUserTie } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import AdminHeader from '../../Components/AdminPanel/AdminHeader/AdminHeader';

// admin panel
const AdminPanel: React.FC = () => {
	const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

	// tsx
	return (
		<>
			<AdminSide isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
			<main className="md:w-9/12 w-full left-0 absolute text-left">
				<AdminHeader setIsMenuShown={setIsMenuShown} />
				<Outlet />
			</main>
		</>
	);
};

// exports
export default AdminPanel;
