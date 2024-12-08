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

export const useShelters = () => {
	const { data: animalShelterData, ...props } = useQuery({
		queryFn: () => communityService.getShelters(),
		queryKey: ['animalShelters'],
	});

	return { animalShelterData, ...props };
};

export const useGetShelters = (id: number) => {
	const { data: animalShelterData, ...props } = useQuery({
		queryFn: () => communityService.getShelters(),
		queryKey: ['animalShelter', id],
	});

	return { animalShelterData, ...props };
};

export const useReportedAnimal = () => {
	const {
		data: reportedAnimalData,
		refetch: refetchAnimals,
		isLoading: isLoadingAnimals,
		isFetching: isFetchingAnimal,
		...props
	} = useQuery({
		queryFn: () => communityService.getReportedAnimals(),
		queryKey: ['reportedAnimals'],
	});

	return {
		reportedAnimalData,
		refetchAnimals,
		isLoadingAnimals,
		isFetchingAnimal,
		...props,
	};
};

export const useGetReportedAnimal = (id: number) => {
	const { data: reportedAnimalData, ...props } = useQuery({
		queryFn: () => communityService.getReportedAnimal(id),
		queryKey: ['reportedAnimal', id],
	});

	return {
		reportedAnimalData,
		...props,
	};
};
