import { AppResponse } from '@/types/common.type';
import http from './api/http';
import BaseService from './base-service';
import { BusValues, VehicleValues } from '@/types/traffic.type';
import { PlaceValues } from '@/types/tourism.type';

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
	}}
    export default new TourismService();