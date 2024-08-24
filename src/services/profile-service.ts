import { AppResponse } from '@/types/common.type';
import http from './api/http';
import BaseService from './base-service';
import { ProfileValue } from '@/types/profile.type';
import { LoginFormValues } from '@/types/login.type';

class ProfileSrvice extends BaseService {
	async getProfile() {
		const response = await http.get<AppResponse<ProfileValue<LoginFormValues>>>(
			'/user/profile'
		);
		return response;
	}
}

export default new ProfileSrvice();
