import { useMutation } from '@tanstack/react-query';
import { ForgotFormValues, LoginFormValues } from '@/types/login.type';
import authService from '../auth-service';
import { getItem, setItem } from '@/utils/storage';
import { router } from 'expo-router';
import { Alert } from 'react-native';
import { RegisterFormValues } from '@/types/register.type';

export const useLogin = () => {
	const {
		mutate: mutateLogin,
		isPending,
		...props
	} = useMutation({
		mutationFn: (data: LoginFormValues) =>
			authService.postLogin({ password: data.password, email: data.email }),
		onSuccess: async (data) => {
			// console.log(`success from auth.ts ${data.data.data.accessToken}`);
			setItem('token', data.data.data.accessToken);
			if (await getItem('token')) {
				router.push('/(user)');
			}
		},
		onError: () => {
			Alert.alert('email or password are incorrect');
		},
	});

	return { mutateLogin, isPending, ...props };
};


export const useRegister=() =>{
	const {
		mutate: mutateRegister,
		isPending,
		...props
	} = useMutation({
		mutationFn: (data: RegisterFormValues) =>
			authService.postRegister({firstName:data.firstName, lastName:data.lastName,email:data.email, password:data.password, confirmPassword:data.confirmPassword
			}),
		onSuccess: async (data) => {
			// // console.log(`success from auth.ts ${data.data.data.accessToken}`);
			// setItem('token', data.data.data.accessToken);
			// if (await getItem('token')) {
			// 	router.push('/(user)');
			// }
			console.log('created account successfully ');
		},
		onError: () => {
			Alert.alert('email or password are incorrect');
		},
	});

	return { mutateRegister, isPending, ...props };

}


export const useForgetPassword=() =>{
	const {
		mutate: mutateForgetPassword,
		isPending,
		...props
	} = useMutation({
		mutationFn: (data: ForgotFormValues) =>
			authService.postForgetPassword({email:data.email}),
		onSuccess: async (data) => {
			// console.log(`success from auth.ts ${data.data.data.accessToken}`);
			// setItem('token', data.data.data.accessToken);
			// if (await getItem('token')) {
			// 	router.push('/(user)');
			// }
			router.push('/(auth)/password/confirmDigits');
			console.log('created account successfully ');
		},
		onError: () => {
			Alert.alert('email or password are incorrect');
		},
	});

	return { mutateForgetPassword, isPending, ...props };

}