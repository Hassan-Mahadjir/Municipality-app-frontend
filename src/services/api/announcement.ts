import { useQuery } from '@tanstack/react-query';

import annoucementService from '../annoucement-service';

export const useAnnouncementService = (params?: any) => {
	const { data: AnnouncementData, ...props } = useQuery({
		queryFn: () => annoucementService.getAnnouncemnets(params),
		queryKey: ['announcement', params],
	});

	return { AnnouncementData, ...props };
};

export const useGetAnnouncement = (id: number) => {
	const { data: AnnouncementData, ...props } = useQuery({
		queryFn: () => annoucementService.getAnAnnouncemnet(id),
		queryKey: ['anAnnouncement', id],
	});

	return { AnnouncementData, ...props };
};
