import { getItem, removeItem } from '@/utils/storage';
import axios from 'axios';

const http = axios.create({
<<<<<<< HEAD
	baseURL: 'http://192.168.31.234:3000',
=======
	baseURL: 'http://192.168.1.137:3000',
>>>>>>> origin/modify
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

http.interceptors.request.use(async (config) => {
	const token = await getItem('token');
	console.log(
		`${config.method?.toUpperCase()}`,
		`${config.baseURL}${config.url}`
	);
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

http.interceptors.response.use(
	(response) => {
		console.info('RESPONSE', JSON.stringify(response.data, undefined, 4));
		return response;
	},
	async (error) => {
		console.error('ERROR', JSON.stringify(error.response, undefined, 4));
		if (error.response.status === 401) {
			removeItem('token');
		}

		return Promise.reject(error);
	}
);

export default http;
