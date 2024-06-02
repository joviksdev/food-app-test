import { useSimilarRecipeServices } from '../../api';
import SimilarFoodItem from './similar-food-item';
import { IRecipe } from '../../utils';

interface ISimilarFoods {
	recipe: string;
}

const SimilarFoods = ({ recipe }: ISimilarFoods) => {
	const { isLoadingSimilarRecipes, similarRecipes } = useSimilarRecipeServices({
		key: recipe,
		params: {
			size: 3,
			recipe_id: recipe,
		},
	});

	return (
		<div>
			<h2 className='mb-4 font-semibold'>Similar Recipes</h2>
			{isLoadingSimilarRecipes ? (
				<p>Loading Similar recipes...</p>
			) : (
				similarRecipes &&
				Array.isArray(similarRecipes) &&
				similarRecipes.length > 0 && (
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
						{[...similarRecipes]
							.splice(0, 4)
							.filter((value) => Object.keys(value)[0] !== recipe)
							.map((value: IRecipe, key) => {
								return (
									<SimilarFoodItem key={`${value?.id}-${key}`} recipe={value} />
								);
							})}
					</div>
				)
			)}
		</div>
	);
};

export default SimilarFoods;
