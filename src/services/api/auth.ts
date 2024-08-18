import { useMutation } from '@tanstack/react-query';
import { LoginFormValues } from '@/types/login.type';
import authService from '../auth-service';
import { getItem, setItem } from '@/utils/storage';
import { router } from 'expo-router';

export const useLogin = () => {
	const { mutate: mutateLogin, ...props } = useMutation({
		mutationFn: (data: LoginFormValues) =>
			authService.postLogin({ password: data.password, email: data.email }),
		onSuccess: async (data) => {
			console.log(`success from auth.ts ${data.data.data.accessToken}`);
			setItem('token', data.data.data.accessToken);
			if (await getItem('token')) {
				// router.push('/(user)');
			}
		},
	});

	return { mutateLogin, ...props };
};
