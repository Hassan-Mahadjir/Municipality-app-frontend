import { AppResponse } from '@/types/common.type';
import http from './api/http';
import BaseService from './base-service';
import { BusValues, VehicleValues } from '@/types/traffic.type';

class TrafficService extends BaseService {
	async getVehicles() {
		const response = await http.get<AppResponse<VehicleValues[]>>(
			'/collected-vehicle'
		);
		return response;
	}
	async getOneVehicle(id: number) {
		const response = await http.get<AppResponse<VehicleValues>>(
			`/collected-vehicle/${id}`
		);
		return response;
	}
	async getBuses() {
		const response = await http.get<AppResponse<BusValues[]>>('/bus/schedule');
		return response;
	}
	async getOneBus(id: number) {
		const response = await http.get<AppResponse<BusValues>>(`/bus/line/${id}`);
		return response;
	}
}

export default new TrafficService();
