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
