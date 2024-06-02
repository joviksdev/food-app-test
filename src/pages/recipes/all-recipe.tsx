import React from 'react';
import { AppContainer, RecipeItem, Spinner } from '../../components';
import { QUERY_KEYS } from '../../utils';
import { useFoodsServices } from '../../api';

const AllRecipe = () => {
	const { foods, isLoadingFood } = useFoodsServices(QUERY_KEYS.LatestFoods);
	return (
		<AppContainer className='pt-4 pb-10'>
			<div className='flex gap-3 items-center mb-4'>
				<h1 className='font-semibold text-2xl  whitespace-nowrap'>
					All Recipes
				</h1>
				<div className='bg-gray-200 h-[1px] w-full' />
			</div>

			{isLoadingFood ? (
				<Spinner />
			) : (
				foods && (
					<div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
						{foods.map((value, key) => {
							const name = Object.keys(value)[0];
							return <RecipeItem key={`${name}-${key}`} recipe={value} />;
						})}
					</div>
				)
			)}
		</AppContainer>
	);
};

export default AllRecipe;
