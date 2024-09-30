import BaseService from './base-service';
import http from './api/http';
import { ChangePassword, ForgotFormValues, LoginFormValues, ResetFormValues } from '@/types/login.type';
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
	async postRegister(data:RegisterFormValues){
		const response = await http.post<AppResponse<AuthDataType>>(
			'/user',
			data
		);
		return response;
	}
	async postForgetPassword(data:ForgotFormValues){
		const response = await http.post<AppResponse<AuthDataType>>(
			'auth/forget-password',
			data
		);
		return response;
	}
	async postValidateResetCode(data:ResetFormValues){
		const response = await http.post<AppResponse<AuthDataType>>(
			'auth/validate-resetCode',
			data
		);
		return response;
	}
	async postResetPassword(data:LoginFormValues){
		const response = await http.post<AppResponse<AuthDataType>>(
			'auth/forget-password',
			data
		);
		return response;
	}
	async putChangePassword(data:ChangePassword){
		const response = await http.put<AppResponse<AuthDataType>>(
			'auth/validate-resetCode',
			data
		);
		return response;
	}

}

export default new AuthService();
