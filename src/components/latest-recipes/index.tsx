import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { List, Grid2X2 } from 'lucide-react';
import RecipeItem from './recipe-item';
import { useRecipesServices } from '../../api';
import { QUERY_KEYS, LINKS } from '../../utils';
import Spinner from '../common/spinner';

enum View {
	List = 'list',
	Grid = 'grid',
}

const LatestRecipes = () => {
	const [viewType, setViewType] = useState<View>(View.Grid);

	const handleChangeView = (view: View) => {
		setViewType(view);
	};

	const { recipes, isLoadingRecipes } = useRecipesServices({
		key: QUERY_KEYS.LatestFoods,
		params: {
			from: '0',
			size: '9',
		},
	});

	return (
		<>
			<div className='flex gap-3 items-center justify-between mb-6'>
				<h1 className='font-semibold text-2xl whitespace-nowrap'>
					Latest Recipes
				</h1>
				<div className='bg-gray-200 h-[1px] w-full' />
				<div className='flex gap-2'>
					<button onClick={() => handleChangeView(View.Grid)}>
						<Grid2X2 />
					</button>
					<button onClick={() => handleChangeView(View.List)}>
						<List />
					</button>
				</div>
			</div>
			{isLoadingRecipes ? (
				<Spinner />
			) : (
				recipes && (
					<>
						<div
							className={`grid gap-8 sm:gap-4 grid-cols-1 transition-all duration-500 ${
								viewType === View.Grid && 'sm:grid-cols-2 lg:grid-cols-3'
							}`}
						>
							{recipes.map((value, key) => {
								return <RecipeItem recipe={value} key={`${value.id}-${key}`} />;
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
