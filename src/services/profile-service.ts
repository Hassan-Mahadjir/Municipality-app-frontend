import { AppResponse } from '@/types/common.type';
import http from './api/http';
import BaseService from './base-service';
import {
	patchProfileValue,
	postEmailValue,
	ProfileValue,
} from '@/types/profile.type';
import { LoginFormValues } from '@/types/login.type';

class ProfileSrvice extends BaseService {
	async getProfile() {
		const response = await http.get<AppResponse<ProfileValue>>('/user/profile');
		return response;
	}

	async patchUserEmail(data: postEmailValue, userId: number) {
		const response = await http.patch<AppResponse<postEmailValue>>(
			`user/${userId}`,
			data
		);

		return response;
	}

	async patchProfile(data: patchProfileValue, userId: number) {
		const response = await http.patch<AppResponse<patchProfileValue>>(
			`user/profile/${userId}`,
			data
		);

		return response;
	}
}

export default new ProfileSrvice();
