import React from 'react';
import {
	LatestRecipes,
	PopularRecipes,
	AppContainer,
	HomeHero,
} from '../../components';

const Home = () => {
	return (
		<>
			<div>
				<HomeHero />
			</div>
			<AppContainer className='flex gap-6 py-[40px]'>
				<div className='flex-1'>
					<LatestRecipes />
				</div>
				<div className='hidden md:block w-[280px]'>
					<PopularRecipes />
				</div>
			</AppContainer>
		</>
	);
};

export default Home;
