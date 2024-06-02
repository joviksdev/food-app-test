import { IFood, ENDPOINTS, IConversion } from '../utils';
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

export const foodController = async (slug: string): Promise<IFood> =>
	apiRequest({
		url: `${ENDPOINTS.Foods}/${slug}`,
		method: 'GET',
	});

export const similarFoodsController = async (
	category: string
): Promise<IFood[]> =>
	apiRequest({
		url: `${ENDPOINTS.FoodCategory}/${category}`,
		method: 'GET',
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
