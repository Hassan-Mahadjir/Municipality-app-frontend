import { useMutation, useQuery } from '@tanstack/react-query';
import notificationService from '../notification-service';
import { postNotificationVaules } from '@/types/notification.type';
import { Alert } from 'react-native';

export const getNotifications = (userId: number) => {
	const { data: notificationsData, ...props } = useQuery({
		queryFn: () => notificationService.getNotifications(userId),
		queryKey: ['notifications', userId],
	});

	return { notificationsData, ...props };
};

export const postNotificationDB = (id: number) => {
	const {
		mutate: mutateNotification,
		isPending,
		...props
	} = useMutation({
		mutationFn: (data: postNotificationVaules) =>
			notificationService.postNotification(
				{
					body: data.body,
					language: data.language,
					reportId: data.reportId,
				},
				id
			),
		onSuccess: async () => {
			console.log('Notification has been stored successfully.');
		},
		onError: (error: any) => {
			// Check if the error contains a response message
			const errorMessage =
				error?.response?.data?.message ||
				'Something went wrong(the notficaions). Please try again.';

			// Show the error message without crashing the app
			Alert.alert('Error', errorMessage);
		},
	});

	return { mutateNotification, isPending, ...props };
};
