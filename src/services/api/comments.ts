import { useMutation, useQuery } from '@tanstack/react-query';

import CommentService from '../comments-service';
import { PostcommValues } from '@/types/comments.type';
import { Alert } from 'react-native';

export const useComments = (type: string, serviceid: number) => {
	const {
		data: commentData,
		refetch,
		isLoading,
		isFetching,
		...props
	} = useQuery({
		queryFn: () => CommentService.getComments(type, serviceid),
		queryKey: ['comments', serviceid],
	});

	return { commentData, refetch, isLoading, isFetching, ...props };
};
export const postCommentHistPlace = (id: number) => {
	const {
		mutate: mutateAppointment,
		isPending,
		...props
	} = useMutation({
		mutationFn: (data: PostcommValues) =>
			CommentService.postComment(
				{
					historicalPlaceId: data.historicalPlaceId,
					
					body: data.body,
					commentedOn: data.commentedOn,
					recommenation: data.recommenation,
				},
				id
			),
		onSuccess: async () => {
			Alert.alert('Appointment has been set successfully.');
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

	return { mutateAppointment, isPending, ...props };
};

export const postCommentRestaurant = (id: number) => {
	const {
		mutate: mutateAppointment,
		isPending,
		...props
	} = useMutation({
		mutationFn: (data: PostcommValues) =>
			CommentService.postComment(
				{
					restaurantId: data.restaurantId,
					body: data.body,
					commentedOn: data.commentedOn,
					recommenation: data.recommenation,
				},
				id
			),
		onSuccess: async () => {
			Alert.alert('Appointment has been set successfully.');
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

	return { mutateAppointment, isPending, ...props };
};
