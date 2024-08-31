import { useQuery } from '@tanstack/react-query';

import homeService from '../home-service';

export const useService = () => {
	const { data: servisesData, ...props } = useQuery({
		queryFn: () => homeService.getServices(),
		queryKey: ['services'],
	});
	// console.log(profileData);
	return { servisesData, ...props };
};
