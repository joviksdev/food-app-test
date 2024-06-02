import axios, { AxiosRequestConfig } from 'axios';
import { ENV } from './env';

const BASE_URL = ENV.BaseUrl;

interface ConfigTypes extends AxiosRequestConfig {
	token?: string;
}

export const apiRequest = async (config?: ConfigTypes) => {
	const res = await axios({
		url: config?.url,
		baseURL: config?.baseURL || BASE_URL,
		method: config?.method,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		data: config?.data,
		params: config?.params,
	});

	return res.data;
};
