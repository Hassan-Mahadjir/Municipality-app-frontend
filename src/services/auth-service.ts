import BaseService from './base-service';
import http from './api/http';
import { LoginFormValues } from '@/types/login.type';
import { AppResponse, AuthDataType } from '@/types/common.type';

class AuthService extends BaseService {
	async postLogin(data: LoginFormValues) {
		const response = await http.post<AppResponse<AuthDataType>>(
			'/auth/login',
			data
		);
		return response;
	}
}

export default new AuthService();
