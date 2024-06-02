import { useParams } from 'react-router-dom';
import {
	AppContainer,
	RecipeDescription,
	SimilarFoods,
	Spinner,
} from '../../components';
import { useRecipeServices } from '../../api';
import { cleanText } from '../../utils';

const Recipe = () => {
	const params = useParams();
	const id = params?.id;

	const { isLoadingRecipe, recipe } = useRecipeServices({
		params: { id },
		key: id as string,
	});
	const randomNumber = Math.ceil(Math.random() * 10);
	const price = randomNumber * 1500;

	if (isLoadingRecipe) {
		return (
			<div className='py-6 px-15'>
				<Spinner />
			</div>
		);
	}

	if (recipe && Object.keys(recipe).length > 0) {
		return (
			<AppContainer className='pt-6 pb-20'>
				<h1 className='mb-2 text-2xl capitalize'>{cleanText(recipe.name)}</h1>
				<div className='grid pt-4 gap-6 grid-cols-6'>
					<div className='col-span-4'>
						<img
							className='w-full'
							src={recipe.thumbnail_url}
							alt={recipe.name}
						/>
					</div>
					<div className='col-span-2'>
						<RecipeDescription price={price} description={recipe.nutrition} />
					</div>
				</div>
				<div className='mt-10'>
					<SimilarFoods recipe={id as string} />
				</div>
			</AppContainer>
		);
	}

	return null;
};

export default Recipe;
