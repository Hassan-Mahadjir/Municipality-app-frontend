import { useMutation, useQuery } from '@tanstack/react-query';

import annoucementService from '../annoucement-service';
import reportService from '../report-service';
import { Alert } from 'react-native';
import { postReportValues } from '@/types/report.type';

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
