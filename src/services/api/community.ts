import { useQuery } from '@tanstack/react-query';

import communityService from '../community-service';

export const useEvent = () => {
	const {
		data: eventData,
		refetch,
		isLoading,
		isFetching,
		...props
	} = useQuery({
		queryFn: () => communityService.getEvents(),
		queryKey: ['events'],
	});

	return { eventData, refetch, isLoading, isFetching, ...props };
};
