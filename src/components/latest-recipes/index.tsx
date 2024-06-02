import { NavLink } from 'react-router-dom';
import RecipeItem from './recipe-item';
import { useFoodsServices } from '../../api';
import { QUERY_KEYS, LINKS } from '../../utils';
import Spinner from '../common/spinner';

const LatestRecipes = () => {
	const { foods, isLoadingFood } = useFoodsServices(QUERY_KEYS.LatestFoods);

	const filteredFoods = foods && Array.isArray(foods) && foods.slice(0, 9);

	return (
		<>
			<div className='flex gap-3 items-center justify-between mb-6'>
				<h1 className='font-semibold text-2xl whitespace-nowrap'>
					Latest Recipes
				</h1>
				<div className='bg-gray-200 h-[1px] w-full' />
			</div>
			{isLoadingFood ? (
				<Spinner />
			) : (
				filteredFoods && (
					<>
						<div className='grid gap-8 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
							{filteredFoods.map((value, key) => {
								const entries = Object.entries(value);
								return (
									<RecipeItem recipe={value} key={`${entries[0]}-${key}`} />
								);
							})}
						</div>
						<div className='flex justify-center my-10'>
							<NavLink
								className={
									'bg-white border border-primary text-primary px-10 py-4 rounded-full hover:shadow-xl hover:bg-primary hover:text-white transition-all duration-500'
								}
								to={LINKS.Recipes}
							>
								See all
							</NavLink>
						</div>
					</>
				)
			)}
		</>
	);
};

export default LatestRecipes;
