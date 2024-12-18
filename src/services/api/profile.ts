import { useMutation, useQuery } from '@tanstack/react-query';

import profileService from '../profile-service';
import {
	patchProfileValue,
	postEmailValue,
	ProfileValue,
} from '@/types/profile.type';
import { Alert } from 'react-native';

export const useProfile = () => {
	const { data: profileData, ...props } = useQuery({
		queryFn: () => profileService.getProfile(),
		queryKey: ['profile'],
	});
	// console.log(profileData);
	return { profileData, ...props };
};

export const patchEmail = (id: number) => {
	const { mutate: mutateEmail, ...props } = useMutation({
		mutationFn: (data: postEmailValue) =>
			profileService.patchUserEmail(
				{
					email: data.email,
				},
				id
			),
		onSuccess: async () => {
			console.log('Email has been updated successully.');
		},
		onError: (error) => {
			console.log('There is an error. (update email)');
		},
	});

	return { mutateEmail };
};

export const patchProfile = (id: number) => {
	const { mutate: mutateProfile, ...props } = useMutation({
		mutationFn: (data: patchProfileValue) =>
			profileService.patchProfile(
				{
					firstName: data.firstName,
					lastName: data.lastName,
					phone: data.phone,
					avatar: data.avatar,
					gender: data.gender,
					dateofBirth: data.dateofBirth,
					description: data.description,
					language: data.language,
					address: data.address,
				},
				id
			),
		onSuccess: async () => {
			Alert.alert('Profile has been updated successfully.');
		},
		onError: (error) => {
			// Check if the error contains a response message
			const errorMessage =
				error?.response?.data?.message ||
				'Something went wrong. Please try again.';

			// Show the error message without crashing the app
			Alert.alert('Error', errorMessage);
		},
	});

	return { mutateProfile };
};
