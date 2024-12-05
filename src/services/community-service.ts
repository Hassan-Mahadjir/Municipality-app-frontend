import { AppResponse } from '@/types/common.type';
import http from './api/http';
import BaseService from './base-service';
import { ServiceValues } from '@/types/home-services.type';
import { HospitalValues, PharmacyValues } from '@/types/health.type';
import { EventValues } from '@/types/community.type';

class CommunityService extends BaseService {
	async getEvents() {
		const response = await http.get<AppResponse<EventValues[]>>('/event');
		return response;
	}
}

export default new CommunityService();
