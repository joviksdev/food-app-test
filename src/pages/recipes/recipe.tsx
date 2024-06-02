import React from 'react';
import { useParams } from 'react-router-dom';
import {
	AppContainer,
	RecipeDescription,
	SimilarFoods,
	Spinner,
} from '../../components';
import { useFoodServices } from '../../api';
import { cleanText } from '../../utils';

const Recipe = () => {
	const params = useParams();
	const slug = params?.slug;

	const { isLoadingFood, dataFood } = useFoodServices(slug as string);
	const randomNumber = Math.ceil(Math.random() * 10);
	const price = randomNumber * 1500;

	const hasFood = dataFood && Object.keys(dataFood).length > 0;

	if (isLoadingFood) {
		return (
			<div className='py-6 px-15'>
				<Spinner />
			</div>
		);
	}

	if (hasFood) {
		const name = Object.keys(dataFood)[0];
		const values = Object.values(dataFood)[0];
		return (
			<AppContainer className='pt-6 pb-20'>
				<h1 className='mb-2 text-2xl capitalize'>{cleanText(name)}</h1>
				<div className='grid pt-4 gap-6 grid-cols-6'>
					<div className='col-span-4'>
						<img className='w-full' src={values.img_url} alt='recipe-image' />
					</div>
					<div className='col-span-2'>
						<RecipeDescription
							price={price}
							description={values.nutritional_information}
						/>
					</div>
				</div>
				<div className='mt-10'>
					<SimilarFoods selectedFood={name} category={values.category} />
				</div>
			</AppContainer>
		);
	}

	return null;
};

export default Recipe;
