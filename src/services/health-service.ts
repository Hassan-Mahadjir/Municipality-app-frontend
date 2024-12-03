import { AppResponse } from '@/types/common.type';
import http from './api/http';
import BaseService from './base-service';
import { ServiceValues } from '@/types/home-services.type';
import { HospitalValues, PharmacyValues } from '@/types/health.type';

class HealthService extends BaseService {
	async getHospital() {
		const response = await http.get<AppResponse<HospitalValues[]>>(
			'/health/hospital',
		
		);
		return response;
	}
	async getPharmacy() {
		const response = await http.get<AppResponse<PharmacyValues[]>>(
			'/health/pharmacy',
		
		);
		return response;
	}
}

export default new HealthService();
