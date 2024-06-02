import { Utensils } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { LINKS } from '../../../utils';

const AppIcon = () => {
	return (
		<NavLink className={'flex items-center gap-2'} to={LINKS.Home}>
			<Utensils size={32} />
			<h1 className='text-3xl font-semibold'>
				Food
				<span className='text-primary'>App</span>
			</h1>
		</NavLink>
	);
};

export default AppIcon;
