import { useMutation, useQuery } from '@tanstack/react-query';

import appointmentService from '../appointment-service';
import { createAppointmentValues } from '@/types/appointment.type';
import { Alert } from 'react-native';

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

export const useGetUserAppointment = (id: number) => {
	const { data: appointmentData, ...props } = useQuery({
		queryFn: () => appointmentService.getUserAppointment(id),
		queryKey: ['user_appointment', id],
	});

	return { appointmentData, ...props };
};
