import { useParams } from 'react-router-dom';
import { AppContainer, RecipeItem, Spinner } from '../../components';
import { useSimilarRecipeServices } from '../../api';

const PopularRecipes = () => {
	const params = useParams();

	const id = params?.id as string;

	const { similarRecipes, isLoadingSimilarRecipes } = useSimilarRecipeServices({
		params: { id },
		key: 'SimilarRecipes-all',
	});

	const data = similarRecipes && Object.values(similarRecipes)[0];

	return (
		<AppContainer className='pt-4 pb-10'>
			<h1 className='font-semibold text-2xl mb-4 capitalize'>Similar Recipe</h1>

			{isLoadingSimilarRecipes ? (
				<Spinner />
			) : (
				data &&
				Array.isArray(data) && (
					<div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
						{data.map((value, key) => {
							const name = Object.keys(value)[0];
							return <RecipeItem key={`${name}-${key}`} recipe={value} />;
						})}
					</div>
				)
			)}
		</AppContainer>
	);
};

export default PopularRecipes;
