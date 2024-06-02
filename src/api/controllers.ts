import { IFood, ENDPOINTS, IConversion, IRecipe } from '../utils';
import { apiRequest } from '../config';
import { ENV } from '../config/env';

export const foodsController = async (params?: {
	[key: string]: any;
}): Promise<IFood[]> =>
	apiRequest({
		url: ENDPOINTS.Foods,
		method: 'GET',
		params,
	});

export const recipesController = async (params?: {
	[key: string]: any;
}): Promise<{ results: IRecipe[]; count: number }> =>
	apiRequest({
		url: `${ENDPOINTS.Recipes}/list`,
		method: 'GET',
		params,
	});

export const recipeController = async (params?: {
	[key: string]: any;
}): Promise<IRecipe> =>
	apiRequest({
		url: `${ENDPOINTS.Recipes}/get-more-info`,
		method: 'GET',
		params,
	});

export const similarRecipesController = async (params?: {
	[key: string]: any;
}): Promise<{ results: IRecipe[] }> =>
	apiRequest({
		url: `${ENDPOINTS.Recipes}/list-similarities`,
		method: 'GET',
		params,
	});

export const dollarToNgn = async (params: any): Promise<IConversion> =>
	apiRequest({
		url: 'fetch-one',
		method: 'GET',
		baseURL: 'https://api.fastforex.io',
		params: {
			api_key: ENV.FastForexKey,
			...params,
		},
	});
