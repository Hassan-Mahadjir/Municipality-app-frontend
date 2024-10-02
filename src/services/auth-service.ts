import BaseService from './base-service';
import http from './api/http';
import {
	ChangePassword,
	sendEamilValues,
	LoginFormValues,
	validationValues,
	ResetPassword,
	googleLoginResponse,
} from '@/types/login.type';
import { AppResponse, AuthDataType } from '@/types/common.type';
import { RegisterFormValues } from '@/types/register.type';

class AuthService extends BaseService {
	async postLogin(data: LoginFormValues) {
		const response = await http.post<AppResponse<AuthDataType>>(
			'/auth/login',
			data
		);
		return response;
	}
	async postRegister(data: RegisterFormValues) {
		const response = await http.post<AppResponse<RegisterFormValues>>(
			'/user',
			data
		);
		return response;
	}
	async postSendEmail(data: sendEamilValues) {
		const response = await http.post<AppResponse<AuthDataType>>(
			'auth/send-code-email',
			data
		);
		return response;
	}
	async postValidateResetCode(data: validationValues) {
		const response = await http.post<AppResponse<validationValues>>(
			'auth/validate-resetCode',
			data
		);
		return response;
	}
	async patchResetPassword(data: ResetPassword) {
		const response = await http.patch<AppResponse<ResetPassword>>(
			'auth/reset-password',
			data
		);
		return response;
	}
	async putChangePassword(data: ChangePassword) {
		const response = await http.put<AppResponse<AuthDataType>>(
			'auth/validate-resetCode',
			data
		);
		return response;
	}

	async getGoogleLogin() {
		const response = await http.get<AppResponse<googleLoginResponse>>(
			'auth/google/login'
		);
		return response;
	}
}

export default new AuthService();
