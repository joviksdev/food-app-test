import axios, { AxiosRequestConfig } from 'axios';
import { ENV } from './env';

const BASE_URL = ENV.BaseUrl;

interface ConfigTypes extends AxiosRequestConfig {
	token?: string;
}

export const apiRequest = async (config?: ConfigTypes) => {
	const headers = config?.headers;
	const res = await axios({
		url: config?.url,
		baseURL: config?.baseURL || BASE_URL,
		method: config?.method,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'X-RapidAPI-Key': 'd4047c84demshd0d92035d828c3ep16d080jsn30960372e188',
			...headers,
		},
		data: config?.data,
		params: config?.params,
	});

	return res.data;
};
