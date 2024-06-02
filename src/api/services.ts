import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../utils';
import {
	dollarToNgn,
	recipesController,
	recipeController,
	similarRecipesController,
	restaurantsController,
} from './controllers';

export const useRecipesServices = ({
	params,
	key,
}: {
	params?: { [key: string]: any };
	key: string;
}) => {
	const { data, isLoading, refetch } = useQuery({
		queryKey: [key],
		queryFn: () => recipesController(params),
	});

	const recipes = data && data?.results;
	const total = data && data.count;

	return {
		isLoadingRecipes: isLoading,
		recipes,
		totalCount: total,
		refetchRecipes: refetch,
	};
};

export const useRecipeServices = ({
	params,
	key,
}: {
	params?: { [key: string]: any };
	key: string;
}) => {
	const { data, isLoading } = useQuery({
		queryKey: [QUERY_KEYS.Recipe, key],
		queryFn: () => recipeController(params),
	});

	const recipe = data;

	return {
		isLoadingRecipe: isLoading,
		recipe,
	};
};

export const useSimilarRecipeServices = ({
	params,
	key,
}: {
	params?: { [key: string]: any };
	key: string;
}) => {
	const { data, isLoading } = useQuery({
		queryKey: [QUERY_KEYS.SimilarRecipes, key],
		queryFn: () => similarRecipesController(params),
	});

	const recipes = data && data?.results;

	return {
		isLoadingSimilarRecipes: isLoading,
		similarRecipes: recipes,
	};
};

export const useRestaurantServices = (params?: { [key: string]: any }) => {
	const { data, isLoading } = useQuery({
		queryKey: [QUERY_KEYS.Restaurants],
		queryFn: () => restaurantsController(params),
	});

	const restaurants = data && data?.data && data.data.data;

	return {
		isLoadingRestaurants: isLoading,
		restaurants,
	};
};

export const useGetForexPrice = () => {
	const { data, isLoading } = useQuery({
		queryKey: [QUERY_KEYS.ForexConvert],
		queryFn: () => dollarToNgn({ from: 'USD', to: 'NGN' }),
		refetchOnWindowFocus: false,
	});

	return {
		isLoadingConvert: isLoading,
		convert: data,
	};
};
