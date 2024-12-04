import { useQuery } from '@tanstack/react-query';

import VehicleService from '../vehicle-service';

export const useVehicles = () => {
	const { data: vehicleData,refetch,isLoading,isFetching, ...props } = useQuery({
		queryFn: () => VehicleService.getVehicles(),
		queryKey: ['vehicles'],
	});

	return { vehicleData,refetch,isLoading,isFetching, ...props};
};
export const useVehicle = (id: number) => {
    const { data: vehicleData, refetch, isLoading, isFetching, ...props } = useQuery({
      queryFn: () => VehicleService.getOneVehicle(id), // Use the `id` parameter correctly
      queryKey: ['vehicle', id], // Include `id` in the query key for caching purposes
    });
  
    return { vehicleData, refetch, isLoading, isFetching, ...props };
  };
  

