import { NavLink } from 'react-router-dom';
import { Utensils } from 'lucide-react';
import { AppContainer } from '../common/container';

const HomeHero = () => {
	return (
		<div>
			<div
				style={{
					backgroundImage: `url(/images/meat-pie.jpg)`,
				}}
				className='group h-[380px] md:h-[540px] [&>img]:w-full bg-cover bg-center relative overflow-hidden before:content-[""] before:absolute before:top-0 before:left-0 before:bg-black/20 before:w-full before:bottom-0 transition-all duration-1000 group-hover/container:scale-105 before:z-0 px-4 py-3 '
			>
				<AppContainer className='relative flex flex-col items-start justify-center h-full'>
					<div className='text-white bg-primary shadow-xl shadow-gray-200/30 inline-block px-4 py-2 mb-4'>
						<p className='uppercase text-[12px]'>Baked</p>
					</div>
					<div className='mb-10'>
						<h1 className='text-white font-normal text-4xl sm:text-4xl md:text-6xl mb-2'>
							Wholewheat Nigerian <br /> Meat pie
						</h1>
						<div className='text-white uppercase flex items-center gap-1 text-[12px]'>
							<Utensils size={14} />
							<p>snacks</p>
						</div>
					</div>
					<NavLink
						className={
							'border border-white px-4 py-2 md:p-4 text-white rounded-md hover:bg-white hover:text-primary transition-all'
						}
						to={'/recipes/meat_pie'}
					>
						View Recipe
					</NavLink>
				</AppContainer>
			</div>
		</div>
	);
};

export default HomeHero;
