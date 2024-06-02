import { useParams } from 'react-router-dom';
import { AppContainer, RecipeItem, Spinner } from '../../components';
import { useSimilarFoodsServices } from '../../api';

const PopularRecipes = () => {
	const params = useParams();

	const slug = params?.slug;

	const { dataSimilarFoods, isLoadingSimilarFoods } = useSimilarFoodsServices(
		slug as string
	);

	const data = dataSimilarFoods && Object.values(dataSimilarFoods)[0];

	return (
		<AppContainer className='pt-4 pb-10'>
			<h1 className='font-semibold text-2xl mb-4 capitalize'>
				{slug?.toString()?.replace(/_/g, ' ')}
			</h1>

			{isLoadingSimilarFoods ? (
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
