import React from 'react';
import { NavLink } from 'react-router-dom';
import { IFood, LINKS } from '../../utils';

interface ISimilarFoodItem {
	food: IFood;
}

const SimilarFoodItem = ({ food }: ISimilarFoodItem) => {
	const name = Object.keys(food)[0];
	const value = Object.values(food)[0];

	return (
		<NavLink to={`${LINKS.Recipes}/${name}`}>
			<div className='group hover:shadow-2xl hover:cursor-pointer duration-700 transition-all border rounded-md overflow-hidden'>
				<div className='h-[100px] overflow-hidden'>
					<div
						style={{
							backgroundImage: `url(${value.img_url})`,
						}}
						className='group h-[100px] [&>img]:w-full bg-cover bg-center relative overflow-hidden before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:bottom-0 transition-all duration-1000 group-hover:scale-105 before:z-0 px-4 py-3 flex flex-col justify-center'
					></div>
				</div>
				<div className='px-4 py-2'>
					<h2 className=' z-10 relative font-semibold capitalize text-[12px]'>
						{name.replace(/_/g, ' ')}
					</h2>
				</div>
			</div>
		</NavLink>
	);
};

export default SimilarFoodItem;
