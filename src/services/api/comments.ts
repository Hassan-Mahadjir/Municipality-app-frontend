import { useQuery } from '@tanstack/react-query';

import CommentService from '../comments-service';

export const useComments = (type: string, serviceid: number) => {
	const {
		data: commentData,
		refetch,
		isLoading,
		isFetching,
		...props
	} = useQuery({
		queryFn: () => CommentService.getComments(type, serviceid),
		queryKey: ['comments', serviceid],
	});

	return { commentData, refetch, isLoading, isFetching, ...props };
};
