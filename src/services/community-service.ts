import { AppResponse } from '@/types/common.type';
import http from './api/http';
import BaseService from './base-service';
import { ServiceValues } from '@/types/home-services.type';
import { HospitalValues, PharmacyValues } from '@/types/health.type';
import {
	DisasterPointValues,
	EmergencyContactValues,
	EventValues,
	WasteSheduleValues,
} from '@/types/community.type';

class CommunityService extends BaseService {
	async getEvents() {
		const response = await http.get<AppResponse<EventValues[]>>('/event');
		return response;
	}

	async getEvent(id: number) {
		const response = await http.get<AppResponse<EventValues>>(`/event/${id}`);
		return response;
	}

	async getWasteSchedules() {
		const response = await http.get<AppResponse<WasteSheduleValues[]>>(
			'community/waste-sechdule'
		);

		return response;
	}

	async getEmergencyContact() {
		const response = await http.get<AppResponse<EmergencyContactValues[]>>(
			'community/emergency-contact'
		);

		return response;
	}

	async getDisasterPoints() {
		const response = await http.get<AppResponse<DisasterPointValues[]>>(
			'community/disaster-point'
		);

		return response;
	}
}

export default new CommunityService();
