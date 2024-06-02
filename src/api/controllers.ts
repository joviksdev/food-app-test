import { IFood, ENDPOINTS, IConversion, IRecipe } from '../utils';
import { apiRequest } from '../config';
import { ENV } from '../config/env';

export const recipesController = async (params?: {
	[key: string]: any;
}): Promise<{ results: IRecipe[]; count: number }> =>
	apiRequest({
		headers: {
			'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
		},
		url: `${ENDPOINTS.Recipes}/list`,
		method: 'GET',
		params,
	});

export const recipeController = async (params?: {
	[key: string]: any;
}): Promise<IRecipe> =>
	apiRequest({
		headers: {
			'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
		},
		url: `${ENDPOINTS.Recipes}/get-more-info`,
		method: 'GET',
		params,
	});

export const similarRecipesController = async (params?: {
	[key: string]: any;
}): Promise<{ results: IRecipe[] }> =>
	apiRequest({
		headers: {
			'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
		},
		url: `${ENDPOINTS.Recipes}/list-similarities`,
		method: 'GET',
		params,
	});

export const restaurantsController = async (params?: {
	[key: string]: any;
}): Promise<{ status: boolean; message: string; data: any }> =>
	apiRequest({
		headers: {
			'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
		},
		url: `${ENDPOINTS.Restaurant}/searchRestaurants`,
		baseURL: 'https://tripadvisor16.p.rapidapi.com/api/v1',
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
