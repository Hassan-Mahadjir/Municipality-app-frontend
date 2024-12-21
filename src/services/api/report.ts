import { useMutation, useQuery } from '@tanstack/react-query';

import reportService from '../report-service';
import { Alert } from 'react-native';
import { postAnimalReportValues, postReportValues } from '@/types/report.type';
import { sendNotification } from '../notificationService';
import notificationService from '../notification-service';
import { useTranslation } from 'react-i18next';

export const useCategory = () => {
	const { data: categoriesData, ...props } = useQuery({
		queryFn: () => reportService.getCategories(),
		queryKey: ['categories'],
	});

	return { categoriesData, ...props };
};

export const postReport = (id: number) => {
	const { i18n, t } = useTranslation();
	const lang = i18n.language.toUpperCase();

	const {
		mutate: mutateReport,
		isPending,
		...props
	} = useMutation({
		mutationFn: (data: postReportValues) =>
			reportService.postReport(
				{
					subject: data.subject,
					longitude: data.longitude,
					latitude: data.latitude,
					message: data.message,
					imageUrls: data.imageUrls,
					departmentName: data.departmentName,
					language: data.language,
				},
				id
			),
		onSuccess: async (response) => {
			try {
				// Get the report ID from the response
				const reportId = response.data.data.id;

				// Send the notification
				await notificationService.postNotification(
					{
						body: `${t('yourReport')} ${id} ${t(
							'report-Notification-Message'
						)}`,
						language: lang,
						reportId: reportId, // Include the report ID in the notification
					},
					id // Pass the user ID
				);

				// Show a success alert
				Alert.alert(t('success'), t('msg'));

				// Optionally send a push notification
				await sendNotification(
					`${t('report-submitted')}`,
					`${t('reportNotification')}`
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
			// Handle errors during report submission
			const errorMessage =
				error?.response?.data?.message ||
				'Something went wrong. Please try again.';
			Alert.alert('Error', errorMessage);
		},
	});

	return { mutateReport, isPending, ...props };
};

export const postRequest = (id: number) => {
	const { i18n, t } = useTranslation();
	const lang = i18n.language.toUpperCase();

	const {
		mutate: mutateRequest,
		isPending,
		...props
	} = useMutation({
		mutationFn: (data: postReportValues) =>
			reportService.postRequest(
				{
					subject: data.subject,
					longitude: data.longitude,
					latitude: data.latitude,
					message: data.message,
					imageUrls: data.imageUrls,
					departmentName: data.departmentName,
					language: data.language,
				},
				id
			),
		onSuccess: async (response) => {
			try {
				// Get the requset ID from the response
				const requestId = response.data.data.id;

				// Send the notification
				await notificationService.postNotification(
					{
						body: `${t('yourReport')} ${id} ${t(
							'request-Notification-Message'
						)}`,
						language: lang,
						requestId: requestId, // Include the request ID in the notification
					},
					id // Pass the user ID
				);

				// Show a success alert
				Alert.alert(t('success'), t('msg'));

				// Optionally send a push notification
				await sendNotification(
					`${t('request-submitted')}`,
					`${t('requestNotification')}`
				);
			} catch (error: any) {
				// Handle errors from the notification service
				const errorMessage =
					error?.response?.data?.message ||
					'Notification could not be sent, but the request was submitted successfully.';
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

	return { mutateRequest, isPending, ...props };
};

export const postAnimalReport = (id: number) => {
	const { i18n, t } = useTranslation();
	const lang = i18n.language.toUpperCase();
	const {
		mutate: mutateAnimalReport,
		isPending,
		...props
	} = useMutation({
		mutationFn: (data: postAnimalReportValues) =>
			reportService.postAnimalReport(
				{
					title: data.title,
					description: data.description,
					location: data.location,
					contactInfo: data.contactInfo,
					latitude: data.latitude,
					longitude: data.longitude,
					language: data.language,
					imageUrls: data.imageUrls,
				},
				id
			),
		onSuccess: async (response) => {
			try {
				// Get the report ID from the response
				const animalId = response.data.data.id;

				// Send the notification
				await notificationService.postNotification(
					{
						body: `${t('yourReport')} ${id} ${t(
							'animal-Notification-Message'
						)}`,
						language: lang,
						animalId: animalId, // Include the report ID in the notification
					},
					id // Pass the user ID
				);

				// Show a success alert
				Alert.alert(t('success'), t('msg'));

				// Optionally send a push notification
				await sendNotification(
					`${t('animal-submitted')}`,
					`${t('animalNotification')}`
				);
			} catch (error: any) {
				// Handle errors from the notification service
				const errorMessage =
					error?.response?.data?.message ||
					'Notification could not be sent, but the request was submitted successfully.';
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

	return { mutateAnimalReport, isPending, ...props };
};
