import { AppResponse } from '@/types/common.type';
import http from './api/http';
import BaseService from './base-service';

const API_KEY = 'ee6690679d43a6979f64771c27463c40';

interface WeatherData {
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
	};
	weather: {
		main: string;
		description: string;
		icon: string;
	}[];
	name: string; // City name
}
class WeatherService extends BaseService {
	async getWeatherByLocation(lat: number, lon: number, lang: string = 'en') {
		// default to 'en' if no language is provided
		try {
			const response = await http.get<AppResponse<WeatherData>>(
				`https://api.openweathermap.org/data/2.5/weather`,
				{
					params: {
						lat,
						lon,
						appid: API_KEY,
						units: 'metric',
						lang, // Pass the lang parameter
					},
				}
			);
			console.log(response.data);
			return response.data.data;
		} catch (error) {
			console.error('Error fetching weather data:', error);
			throw error;
		}
	}
}

export default new WeatherService();
