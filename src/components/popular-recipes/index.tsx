import PopularRecipeItem from './popular-recipe-item';
import { QUERY_KEYS } from '../../utils';
import { useRecipesServices } from '../../api';

const PopularRecipes = () => {
	const { recipes } = useRecipesServices({
		key: `${QUERY_KEYS.Recipes}-popular`,
		params: {
			from: 0,
			size: '20',
		},
	});

	if (recipes && Object.keys(recipes).length > 0) {
		return (
			<div className='sticky top-[110px] hidden md:block'>
				<h3 className='text-[18px] mb-4'>Popular Recipes</h3>
				<div className='grid gap-[2px]'>
					<PopularRecipeItem recipes={recipes} />
					<PopularRecipeItem recipes={recipes} />
					<PopularRecipeItem recipes={recipes} />
				</div>
			</div>
		);
	}

	return null;
};

export default PopularRecipes;
