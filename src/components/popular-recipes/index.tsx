import React from 'react';
import { useNavigate } from 'react-router-dom';
import PopularRecipeItem from './popular-recipe-item';
import { CATEGORIES, LINKS } from '../../utils';

const PopularRecipes = () => {
	const navigate = useNavigate();
	const onClick = (slug: string) => {
		navigate(`${LINKS.PopularRecipes}/${slug}`);
	};

	return (
		<div className='sticky top-[110px] hidden md:block'>
			<h3 className='text-[18px] mb-4'>Popular Recipes</h3>
			<div className='grid gap-[2px]'>
				{[...CATEGORIES].splice(0, 3).map((value) => (
					<PopularRecipeItem
						onClick={() => onClick(value)}
						key={value}
						text={value}
					/>
				))}
			</div>
		</div>
	);
};

export default PopularRecipes;
