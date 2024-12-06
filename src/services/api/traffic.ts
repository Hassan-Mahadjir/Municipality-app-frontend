import { useQuery } from '@tanstack/react-query';

import TrafficService from '../traffic-service';

export const useVehicles = () => {
	const {
		data: vehicleData,
		refetch,
		isLoading,
		isFetching,
		...props
	} = useQuery({
		queryFn: () => TrafficService.getVehicles(),
		queryKey: ['vehicles'],
	});

	return { vehicleData, refetch, isLoading, isFetching, ...props };
};
export const useVehicle = (id: number) => {
	const {
		data: vehicleData,
		refetch,
		isLoading,
		isFetching,
		...props
	} = useQuery({
		queryFn: () => TrafficService.getOneVehicle(id), // Use the `id` parameter correctly
		queryKey: ['vehicle', id], // Include `id` in the query key for caching purposes
	});

	return { vehicleData, refetch, isLoading, isFetching, ...props };
};

export const useBuses = () => {
	const {
		data: busData,
		refetch,
		isLoading,
		isFetching,
		...props
	} = useQuery({
		queryFn: () => TrafficService.getBuses(),
		queryKey: ['buses'],
	});

	return { busData, refetch, isLoading, isFetching, ...props };
};

export const useBus = (id: number) => {
	const {
		data: busData,
		refetch,
		isLoading,
		isFetching,
		...props
	} = useQuery({
		queryFn: () => TrafficService.getOneBus(id), // Use the `id` parameter correctly
		queryKey: ['bus', id], // Include `id` in the query key for caching purposes
	});

	return { busData, refetch, isLoading, isFetching, ...props };
};
