import { NavLink } from 'react-router-dom';
import { IRecipe, LINKS } from '../../utils';
// top-[-50%] left-[50%] translate-x-[-50%] translate-y-[-50%]

interface IRecipeItem {
	recipe: IRecipe;
}

const RecipeItem = ({ recipe }: IRecipeItem) => {
	return (
		<div className='group/container bg-gray-100 overflow-hidden rounded-md hover:shadow-lg transition-all duration-1000'>
			<div className='group h-[250px] [&>img]:w-full relative overflow-hidden'>
				<div
					style={{
						backgroundImage: `url(${recipe.thumbnail_url})`,
					}}
					className='group h-[250px] [&>img]:w-full bg-cover bg-center relative overflow-hidden before:content-[""] before:absolute before:top-0 before:left-0 before:bg-primary/20 before:w-full before:bottom-0 transition-all duration-1000 before:opacity-0 group-hover/container:before:opacity-100 group-hover/container:scale-105'
				></div>
				<NavLink
					to={`${LINKS.Recipes}/${recipe.id}`}
					className='bg-white text-primary  px-6 py-3 rounded-md left-[50%] translate-x-[-50%] top-[-50px] absolute group-hover/container:top-[50%] duration-300 group-hover/container:translate-y-[-50%]  transition-all opacity-0 group-hover/container:opacity-100 hover:bg-primary hover:text-white'
				>
					View Recipe
				</NavLink>
			</div>
			<div className='px-6 py-4'>
				<h3 className='group-hover/container:text-primary capitalize'>
					{recipe?.name}
				</h3>
			</div>
		</div>
	);
};

export default RecipeItem;
