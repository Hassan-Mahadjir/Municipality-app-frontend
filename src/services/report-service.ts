import { AppResponse } from '@/types/common.type';
import http from './api/http';
import BaseService from './base-service';
import {
	categoryValues,
	postAnimalReportValues,
	postReportValues,
} from '@/types/report.type';
import { PostcommValues } from '@/types/comments.type';

class ReportService extends BaseService {
	async getCategories() {
		const response = await http.get<AppResponse<categoryValues[]>>('/category');
		return response;
	}

	async postReport(data: postReportValues, userId: number) {
		const response = await http.post<AppResponse<postReportValues>>(
			`report/${userId}`,
			data
		);

		return response;
	}

	async postRequest(data: postReportValues, userId: number) {
		const response = await http.post<AppResponse<postReportValues>>(
			`request/${userId}`,
			data
		);

		return response;
	}

	async postAnimalReport(data: postAnimalReportValues, userId: number) {
		const response = await http.post<AppResponse<postAnimalReportValues>>(
			`community/animal-report/${userId}`,
			data
		);

		return response;
	}
}

export default new ReportService();
