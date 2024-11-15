import { AppResponse } from '@/types/common.type';
import http from './api/http';
import BaseService from './base-service';
import { AnnoucementValues } from '@/types/annoucement.type';

class AnnoucementService extends BaseService {
	async getAnnouncemnets(params?: { limit?: number }) {
		const response = await http.get<AppResponse<AnnoucementValues[]>>(
			'/annoucement',
			{ params }
		);
		return response;
	}

	async getAnAnnouncemnet(id: number) {
		const response = await http.get<AppResponse<AnnoucementValues>>(
			`/annoucement/${id}`
		);

		return response;
	}
}

export default new AnnoucementService();
