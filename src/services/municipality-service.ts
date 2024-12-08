import { AppResponse } from '@/types/common.type';
import http from './api/http';
import BaseService from './base-service';
import { DepartmentValues } from '@/types/munitipality.type';

class MunicipalityService extends BaseService {
	async getDepartments() {
		const response = await http.get<AppResponse<DepartmentValues[]>>(
			'/department'
		);
		return response;
	}

	async getDepartment(id: number) {
		const response = await http.get<AppResponse<DepartmentValues>>(
			`/department/${id}`
		);

		return response;
	}
}

export default new MunicipalityService();
