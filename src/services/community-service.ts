import { AppResponse } from '@/types/common.type';
import http from './api/http';
import BaseService from './base-service';
import { ServiceValues } from '@/types/home-services.type';
import { HospitalValues, PharmacyValues } from '@/types/health.type';
import {
	DisasterPointValues,
	EmergencyContactValues,
	EventValues,
	ReportedanimalValues,
	ShelterValues,
	updateReportedAnimalValues,
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

	async getShelters() {
		const response = await http.get<AppResponse<ShelterValues[]>>(
			'community/animal-shelter'
		);

		return response;
	}

	async getShelter(id: number) {
		const response = await http.get<AppResponse<ShelterValues>>(
			`community/animal-shelter/${id}`
		);

		return response;
	}

	async getReportedAnimals() {
		const response = await http.get<AppResponse<ReportedanimalValues[]>>(
			'community/animal-report'
		);

		return response;
	}

	async getReportedAnimal(id: number) {
		const response = await http.get<AppResponse<ReportedanimalValues>>(
			`community/animal-report/${id}`
		);

		return response;
	}

	async updateReportedAnimal(id: number, data: updateReportedAnimalValues) {
		const response = await http.patch<AppResponse<updateReportedAnimalValues>>(
			`community/animal-report/${id}`,
			data
		);

		return response;
	}
}

export default new CommunityService();
