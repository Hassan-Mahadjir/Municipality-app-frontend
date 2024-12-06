import { AppResponse } from '@/types/common.type';
import http from './api/http';
import BaseService from './base-service';
import { PlaceValues, RestaurantValues } from '@/types/tourism.type';

class TourismService extends BaseService {
	async getPlaces() {
		const response = await http.get<AppResponse<PlaceValues[]>>(
			'/tourism/historical-palce'
		);
		return response;
	}
	async getOnePlace(id: number) {
		const response = await http.get<AppResponse<PlaceValues>>(
			`/tourism/historical-palce/${id}`
		);
		return response;
	}
	async getRestaurants() {
		const response = await http.get<AppResponse<RestaurantValues[]>>(
			'/tourism/restaurant' // Ensure this is correct
		);
		return response;
	}
	
	async getOneRestaurant(id: number) {
		const response = await http.get<AppResponse<RestaurantValues>>(
			`/tourism/restaurant/${id}` // Ensure this is correct
		);
		return response;
	}
	


}
    export default new TourismService();