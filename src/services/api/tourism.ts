import { useQuery } from '@tanstack/react-query';

import TourismService from '../tourism-service';

export const usePlaces = () => {
	const { data: placeData,refetch,isLoading,isFetching, ...props } = useQuery({
		queryFn: () => TourismService.getPlaces(),
		queryKey: ['places'],
	});

	return { placeData,refetch,isLoading,isFetching, ...props};
};
export const usePlace = (id: number) => {
    const { data: placeData, refetch, isLoading, isFetching, ...props } = useQuery({
      queryFn: () => TourismService.getOnePlace(id), // Use the `id` parameter correctly
      queryKey: ['place', id], // Include `id` in the query key for caching purposes
    });
  
    return { placeData, refetch, isLoading, isFetching, ...props };
  };