// react
import React, { useState } from 'react';

// components
import PanelSide from '../../Components/Panel/PanelSide/PanelSide';
import { Outlet } from 'react-router-dom';
import PanelHeader from '../../Components/Panel/PanelHeader/PanelHeader';

const UserPanel: React.FC = () => {
	const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

	return (
		<>
			<PanelSide isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
			<main className="md:w-9/12 w-full left-0 absolute">
				<PanelHeader setIsMenuShown={setIsMenuShown} />
				<Outlet />
			</main>
		</>
	);
};

export default UserPanel;
