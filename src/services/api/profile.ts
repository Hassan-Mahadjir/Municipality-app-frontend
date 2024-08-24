import { useQuery } from '@tanstack/react-query';

import profileService from '../profile-service';

export const useProfile = () => {
	const { data: profileData, ...props } = useQuery({
		queryFn: () => profileService.getProfile(),
		queryKey: ['profile'],
	});
	// console.log(profileData);
	return { profileData, ...props };
};
