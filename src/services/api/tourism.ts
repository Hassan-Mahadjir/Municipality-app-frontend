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

  export const useRestaurants = () => {
    const { data: restData, refetch, isLoading, isFetching, ...props } = useQuery({
        queryFn: () => {
            console.log('Fetching all restaurants...');
            return TourismService.getRestaurants();
        },
        queryKey: ['restaurants'],
    });

    console.log('Fetched Restaurants Data:', restData);
    return { restData, refetch, isLoading, isFetching, ...props };
};


export const useRestaurant = (id: number) => {
  const { data: restData, refetch, isLoading, isFetching, ...props } = useQuery({
      queryFn: () => {
          return TourismService.getOneRestaurant(id);
      },
      queryKey: ['restaurant', id],
  });

  return { restData, refetch, isLoading, isFetching, ...props };
};
export const usePayment = () => {
  const { data: paymentData, ...props } = useQuery({
      queryFn: () => {
          return TourismService.getPaymentPoint();
      },
      queryKey: ['paymentPoint'],
  });

  return { paymentData, ...props };
};

  