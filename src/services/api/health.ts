import { useQuery } from '@tanstack/react-query';

import HealthService from '../health-service';

export const useHospital = () => {
	const { data: hospitalData, ...props } = useQuery({
		queryFn: () => HealthService.getHospital(),
		queryKey: ['hospitals'],
	});
	// console.log(profileData);
	return { hospitalData, ...props };
};
export const usePharmacy = () => {
	const { data: pharmacyData, ...props } = useQuery({
		queryFn: () => HealthService.getPharmacy(),
		queryKey: ['pharmacies'],
	});
	// console.log(profileData);
	return { pharmacyData, ...props };
};
