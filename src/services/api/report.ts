import { useMutation, useQuery } from '@tanstack/react-query';

import annoucementService from '../annoucement-service';
import reportService from '../report-service';
import { Alert } from 'react-native';
import { postAnimalReportValues, postReportValues } from '@/types/report.type';
import { sendNotification } from '../notificationService';

export const useCategory = () => {
	const { data: categoriesData, ...props } = useQuery({
		queryFn: () => reportService.getCategories(),
		queryKey: ['categories'],
	});

	return { categoriesData, ...props };
};

export const postReport = (id: number) => {
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
		onSuccess: async () => {
			Alert.alert('Report has been submitted successfully.');
			await sendNotification(
				'Report Submitted',
				'Your report has been submitted successfully.'
			);
		},
		onError: (error) => {
			// Check if the error contains a response message
			const errorMessage =
				error?.response?.data?.message ||
				'Something went wrong. Please try again.';

			// Show the error message without crashing the app
			Alert.alert('Error', errorMessage);
		},
	});

	return { mutateReport, isPending, ...props };
};

export const postRequest = (id: number) => {
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
		onSuccess: async () => {
			Alert.alert('Request has been submitted successfully.');
			await sendNotification(
				'Report Submitted',
				'Your request has been submitted successfully.'
			);
		},
		onError: (error) => {
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
		onSuccess: async () => {
			Alert.alert('Animal report has been submitted successfully.');
			await sendNotification(
				'Animal report Submitted',
				'Your report has been submitted successfully.'
			);
		},
		onError: (error) => {
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
