import React from 'react';
import { Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { LINKS } from '../../../utils';
import AppIcon from '../../common/app-icon';

interface IAppHeader {
	toggleMenu: () => void;
}

const AppHeader: React.FC<IAppHeader> = ({ toggleMenu }) => {
	return (
		<header className='fixed border-b w-full h-[80px] z-10 bg-white flex'>
			<div className='flex items-center justify-between w-full max-w-[1200px] mx-auto px-[15px] py-2'>
				<AppIcon />
				<button onClick={toggleMenu} className='md:hidden'>
					<Menu />
				</button>
				<nav className='hidden md:block'>
					<ul className='flex gap-5'>
						<li>
							<NavLink
								className={({ isActive }) =>
									`relative font-semibold px-6 flex justify-center hover:text-primary before:content-[''] before:transition-all before:duration-500 before:scale-x-0 hover:before:scale-x-100 before:absolute before:h-[4px] before:bottom-[-28px] before:w-full before:bg-primary ${
										isActive && 'before:!scale-x-100 text-primary'
									}`
								}
								to={LINKS.Recipes}
							>
								Recipes
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									`relative font-semibold px-6 flex justify-center hover:text-primary before:content-[''] before:transition-all before:duration-500 before:scale-x-0 hover:before:scale-x-100 before:absolute before:h-[4px] before:bottom-[-28px] before:w-full before:bg-primary ${
										isActive && 'before:!scale-x-100 text-primary'
									}`
								}
								to={LINKS.Resturants}
							>
								Resturants
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default AppHeader;
