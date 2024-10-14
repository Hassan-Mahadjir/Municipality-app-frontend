import { useQuery } from '@tanstack/react-query';

import homeService from '../home-service';

export const useService = (params?: any) => {
	const { data: servisesData, ...props } = useQuery({
		queryFn: () => homeService.getServices(params),
		queryKey: ['services', params],
	});
	// console.log(profileData);
	return { servisesData, ...props };
};
