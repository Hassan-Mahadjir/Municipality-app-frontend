import { useQuery } from '@tanstack/react-query';

import communityService from '../community-service';

export const useEvent = () => {
	const { data: eventData, ...props } = useQuery({
		queryFn: () => communityService.getEvents(),
		queryKey: ['events'],
	});

	return { eventData, ...props };
};

export const useGetEvent = (id: number) => {
	const { data: eventData, ...props } = useQuery({
		queryFn: () => communityService.getEvent(id),
		queryKey: ['events', id],
	});

	return { eventData, ...props };
};

export const useWasteSchedule = () => {
	const { data: wasteSchduleData, ...props } = useQuery({
		queryFn: () => communityService.getWasteSchedules(),
		queryKey: ['wasteSchedules'],
	});

	return { wasteSchduleData, ...props };
};

export const useEmergencyContact = () => {
	const { data: emergencyContactData, ...props } = useQuery({
		queryFn: () => communityService.getEmergencyContact(),
		queryKey: ['emergencyContacts'],
	});

	return { emergencyContactData, ...props };
};

export const useDisaterPoints = () => {
	const { data: disasterPointData, ...props } = useQuery({
		queryFn: () => communityService.getDisasterPoints(),
		queryKey: ['emergencyContacts'],
	});

	return { disasterPointData, ...props };
};
