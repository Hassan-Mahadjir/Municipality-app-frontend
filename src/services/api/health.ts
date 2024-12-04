import { useQuery } from '@tanstack/react-query';

import HealthService from '../health-service';

export const useHospital = () => {
	const {
		data: hospitalData,
		refetch,
		isLoading,
		isFetching,
		...props
	} = useQuery({
		queryFn: () => HealthService.getHospital(),
		queryKey: ['hospitals'],
	});

	return { hospitalData, refetch, isLoading, isFetching, ...props };
};

export const usePharmacy = () => {
	const {
		data: pharmacyData,
		isFetched,
		isLoading,
		refetch,
		...props
	} = useQuery({
		queryFn: () => HealthService.getPharmacy(),
		queryKey: ['pharmacies'],
	});
	// console.log(profileData);
	return { pharmacyData, isFetched, isLoading, refetch, ...props };
};
