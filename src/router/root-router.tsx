import { createBrowserRouter } from 'react-router-dom';
import { DefaultLayout } from '../components';

// Pages
import { Home, Recipe, AllRecipe, PopularRecipes, Resturants } from '../pages';

const rootRouter = createBrowserRouter([
	{
		path: '/',
		element: <DefaultLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/recipes',
				element: <AllRecipe />,
			},
			{
				path: '/recipes/:slug',
				element: <Recipe />,
			},
			{
				path: '/popular-recipes/:slug',
				element: <PopularRecipes />,
			},
			{
				path: '/resturants',
				element: <Resturants />,
			},
		],
	},
]);

export default rootRouter;
