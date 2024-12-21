import { useMutation, useQuery } from '@tanstack/react-query';

import appointmentService from '../appointment-service';
import { createAppointmentValues } from '@/types/appointment.type';
import { Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import notificationService from '../notification-service';
import { sendNotification } from '../notificationService';

export const useGetScheduleSlots = () => {
	const { data: scheduleData, ...props } = useQuery({
		queryFn: () => appointmentService.getScheduleSlots(),
		queryKey: ['slots'],
	});

	return { scheduleData, ...props };
};

export const useGetResposible = (id: number) => {
	const { data: resposibleData, ...props } = useQuery({
		queryFn: () => appointmentService.getResposible(id),
		queryKey: ['resposible', id],
	});

	return { resposibleData, ...props };
};

export const postAppointment = (id: number) => {
	const { i18n, t } = useTranslation();
	const lang = i18n.language.toUpperCase();
	const {
		mutate: mutateAppointment,
		isPending,
		...props
	} = useMutation({
		mutationFn: (data: createAppointmentValues) =>
			appointmentService.postAppointment(
				{
					date: data.date,
					startTime: data.startTime,
					purpose: data.purpose,
					appointmentWith: data.appointmentWith,
					language: data.language,
				},
				id
			),
		onSuccess: async (response) => {
			try {
				// Get the report ID from the response
				const appointmentId = response.data.data.id;

				// Send the notification
				await notificationService.postNotification(
					{
						body: `${t('yourAppointments')} ${id} ${t(
							'appointment-Notification-Message'
						)}`,
						language: lang,
						reportId: appointmentId, // Include the report ID in the notification
					},
					id // Pass the user ID
				);

				// Show a success alert
				Alert.alert(t('success'), t('msg2'));

				// Optionally send a push notification
				await sendNotification(
					`${t('appointment-submitted')}`,
					`${t('appointmentNotification')}`
				);
			} catch (error: any) {
				// Handle errors from the notification service
				const errorMessage =
					error?.response?.data?.message ||
					'Notification could not be sent, but the report was submitted successfully.';
				Alert.alert('Warning', errorMessage);
			}
		},
		onError: (error: any) => {
			// Check if the error contains a response message
			const errorMessage =
				error?.response?.data?.message ||
				'Something went wrong. Please try again.';

			// Show the error message without crashing the app
			Alert.alert('Error', errorMessage);
		},
	});

	return { mutateAppointment, isPending, ...props };
};

export const useGetUserAppointment = (id: number) => {
	const { data: appointmentData, ...props } = useQuery({
		queryFn: () => appointmentService.getUserAppointment(id),
		queryKey: ['user_appointment', id],
	});

	return { appointmentData, ...props };
};
