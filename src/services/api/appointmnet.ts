import { useQuery } from '@tanstack/react-query';

import appointmentService from '../appointment-service';

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
