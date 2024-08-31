import { AppResponse } from '@/types/common.type';
import http from './api/http';
import BaseService from './base-service';
import { ServiceValues } from '@/types/home-services.type';

class HomeService extends BaseService {
	async getServices() {
		const response = await http.get<AppResponse<ServiceValues[]>>(
			'/department'
		);
		return response;
	}
}

export default new HomeService();
