import { AppResponse } from '@/types/common.type';
import http from './api/http';
import BaseService from './base-service';
import {
	createAppointmentValues,
	responsibleValues,
	scheduleSlotsValues,
	userAppointmentValues,
} from '@/types/appointment.type';

class AppoitmentService extends BaseService {
	async getScheduleSlots() {
		const response = await http.get<AppResponse<scheduleSlotsValues[]>>(
			'/appointment/slot'
		);
		return response;
	}

	async getResposible(id: number) {
		const response = await http.get<AppResponse<responsibleValues>>(
			`/user/${id}`
		);
		return response;
	}

	async postAppointment(data: createAppointmentValues, userId: number) {
		const response = await http.post<AppResponse<createAppointmentValues>>(
			`appointment/${userId}`,
			data
		);

		return response;
	}

	async getUserAppointment(id: number) {
		const response = await http.get<AppResponse<userAppointmentValues[]>>(
			`appointment/user/${id}`
		);
		return response;
	}
}

export default new AppoitmentService();
