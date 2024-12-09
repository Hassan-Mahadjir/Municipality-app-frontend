import { AppResponse } from '@/types/common.type';
import http from './api/http';
import BaseService from './base-service';
import {
	responsibleValues,
	scheduleSlotsValues,
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
}

export default new AppoitmentService();
