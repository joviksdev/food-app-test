import React from 'react';
import { useSimilarFoodsServices } from '../../api';
import SimilarFoodItem from './similar-food-item';
import { IFood } from '../../utils';

interface ISimilarFoods {
	category: string;
	selectedFood: string;
}

const SimilarFoods = ({ category, selectedFood }: ISimilarFoods) => {
	const { isLoadingSimilarFoods, dataSimilarFoods } =
		useSimilarFoodsServices(category);

	const categoryList = dataSimilarFoods && Object.values(dataSimilarFoods);

	return (
		<div>
			<h2 className='mb-4 font-semibold'>Similar Foods</h2>
			{isLoadingSimilarFoods ? (
				<p>Loading Similar Food...</p>
			) : (
				categoryList && (
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
						{[...(categoryList[0] as any)]
							.splice(0, 5)
							.filter((value) => Object.keys(value)[0] !== selectedFood)
							.map((value: IFood, key) => {
								const food = Object.values(value)[0];
								return (
									<SimilarFoodItem
										key={`${food?.category}-${key}`}
										food={value}
									/>
								);
							})}
					</div>
				)
			)}
		</div>
	);
};

export default SimilarFoods;
