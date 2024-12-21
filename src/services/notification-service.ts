import { AppResponse } from '@/types/common.type';
import http from './api/http';
import BaseService from './base-service';
import {
	NotificationVaules,
	postNotificationVaules,
} from '@/types/notification.type';

class NotificationService extends BaseService {
	async getNotifications(userId: number) {
		const response = await http.get<AppResponse<NotificationVaules[]>>(
			`/notification/${userId}`
		);
		return response;
	}

	async postNotification(data: postNotificationVaules, userId: number) {
		const response = await http.post<AppResponse<postNotificationVaules>>(
			`notification/${userId}`,
			data
		);

		return response;
	}
}

export default new NotificationService();
