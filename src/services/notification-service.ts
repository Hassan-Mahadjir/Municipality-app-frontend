import { AppResponse } from '@/types/common.type';
import http from './api/http';
import BaseService from './base-service';
import { NotificationVaules } from '@/types/notification.type';

class NotificationService extends BaseService {
	async getNotifications(userId: number) {
		const response = await http.get<AppResponse<NotificationVaules[]>>(
			`/notification/${userId}`
		);
		return response;
	}
}

export default new NotificationService();
