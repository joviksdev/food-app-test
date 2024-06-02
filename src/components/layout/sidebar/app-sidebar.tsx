import React from 'react';
import { NavLink } from 'react-router-dom';
import { XCircleIcon } from 'lucide-react';
import AppIcon from '../../common/app-icon';
import { LINKS } from '../../../utils';

interface IAppSidebar {
	isDisplay?: boolean;
	closeSidebar?: () => void;
}

const AppSidebar: React.FC<IAppSidebar> = ({ isDisplay, closeSidebar }) => {
	return (
		<div
			className={`translate-x-[-100vw] h-screen top-0 left-0 bottom-0 w-full transition-transform fixed z-40 duration-500  ${
				isDisplay && '!translate-x-0 bg-black/40'
			}`}
		>
			<div
				className={`fixed top-0 left-0 z-20 bottom-0 bg-white h-full w-[70%] transition-all duration-500 px-[15px] py-6 ${
					isDisplay && '!translate-x-0'
				}`}
			>
				<button onClick={closeSidebar} className='absolute top-4 right-4 '>
					<XCircleIcon />
				</button>
				<AppIcon />
				<ul className='mt-5'>
					<li className='mb-4'>
						<NavLink onClick={closeSidebar} to={LINKS.Recipes}>
							Recipes
						</NavLink>
					</li>
					<li>
						<NavLink onClick={closeSidebar} to={LINKS.Resturants}>
							Resturants
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AppSidebar;
