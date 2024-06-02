import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AppHeader } from './header';
import { AppFooter } from './footer';
import { AppSidebar } from './sidebar';

const DefaultLayout = () => {
	const [isDisplayMenu, setDisplayMenu] = useState<boolean>(false);
	const handleToggleMenu = () => {
		setDisplayMenu(!isDisplayMenu);
	};
	return (
		<div className='flex flex-col h-screen'>
			<AppSidebar
				isDisplay={isDisplayMenu}
				closeSidebar={() => setDisplayMenu(false)}
			/>
			<AppHeader toggleMenu={handleToggleMenu} />
			<div className='pt-[80px] flex-1'>
				<Outlet />
			</div>
			<AppFooter />
		</div>
	);
};

export default DefaultLayout;
