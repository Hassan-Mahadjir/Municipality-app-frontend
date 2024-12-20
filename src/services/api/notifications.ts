import { useQuery } from '@tanstack/react-query';
import notificationService from '../notification-service';

export const getNotifications = (userId: number) => {
	const { data: notificationsData, ...props } = useQuery({
		queryFn: () => notificationService.getNotifications(userId),
		queryKey: ['notifications', userId],
	});

	return { notificationsData, ...props };
};
