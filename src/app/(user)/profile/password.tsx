import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { Stack } from 'expo-router';
import CustomInputComponent from '@/components/CustomInput';
import { styles } from '@/styles/password';
import { useChangePassword } from '@/services/api/auth';
import { ChangePassword } from '@/types/login.type';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import SubmitButtonComponent from '@/components/SubmitButton';

type FormValues = {
	oldPassword: string;
	newPassword: string;
	confirmPassword: string;
};

export default function PasswordScreen() {
	const { t } = useTranslation();
	const { mutateChangePassword, isPending } = useChangePassword();

	// Validation
	const formSchema = z
		.object({
			oldPassword: z
				.string()
				.min(1, { message: `Please enter your old password` }),
			newPassword: z.string().min(1, { message: t('passwordValidation') }),
			confirmPassword: z.string().min(1, { message: t('passwordValidation') }),
		})
		.refine((data) => data.newPassword === data.confirmPassword, {
			message: t('passwordDontMatch'),
			path: ['confirmPassword'],
		});

	const onSubmit = (data: ChangePassword) => {
		mutateChangePassword(data);
	};

	const methods = useForm<FormValues>({
		resolver: zodResolver(formSchema),
	});

	const {
		register,
		setValue,
		watch,
		formState: { errors },
	} = methods;

	// Register inputs
	React.useEffect(() => {
		register('oldPassword');
		register('newPassword');
		register('confirmPassword');
	}, [register]);

	// References
	const oldPasswordRef = useRef<TextInput>(null);
	const newPasswordRef = useRef<TextInput>(null);
	const confiremNewPasswordRef = useRef<TextInput>(null);

	return (
		<FormProvider {...methods}>
			<Stack.Screen options={{ title: t('changep') }} />
			<View style={styles.container}>
				<CustomInputComponent
					name='oldPassword'
					text={t('oldpass')}
					inputType='password'
					returnKeyType='next'
					ref={oldPasswordRef}
					onSubmitEditing={() => newPasswordRef.current?.focus()}
				/>
				<CustomInputComponent
					name='newPassword'
					text={t('newpass')}
					inputType='password'
					returnKeyType='next'
					ref={newPasswordRef}
					onSubmitEditing={() => confiremNewPasswordRef.current?.focus()}
				/>
				<CustomInputComponent
					name='confirmPassword'
					text={t('confirmpass')}
					inputType='password'
					returnKeyType='done'
					ref={confiremNewPasswordRef}
				/>
				<SubmitButtonComponent
					title={t('changep')}
					fullWidth
					onPress={methods.handleSubmit(onSubmit)}
				/>
			</View>
		</FormProvider>
	);
}
