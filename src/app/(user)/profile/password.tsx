import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useForm, FormProvider } from 'react-hook-form';
import { Stack } from 'expo-router';
import CustomInputComponent from '@/components/CustomInput';
import { styles } from '@/styles/password';
import { useChangePassword } from '@/services/api/auth';
import { ChangePassword } from '@/types/login.type';
import { useTranslation } from 'react-i18next'; // Import translation hook

type FormValues = {
	oldPassword: string;
	newPassword: string;
	confirmPassword: string;
};

export default function PasswordScreen() {
	const { mutateChangePassword } = useChangePassword();
	const methods = useForm<FormValues>();
	const {
		register,
		setValue,
		watch,
		formState: { errors },
	} = methods;
	const { t } = useTranslation(); // Translation function

	// Register inputs
	React.useEffect(() => {
		register('oldPassword');
		register('newPassword');
		register('confirmPassword');
	}, [register]);

	const onSubmit = (data: ChangePassword) => {
		mutateChangePassword(data);
	};

	return (
		<FormProvider {...methods}>
			{/* Use translated title */}
			<Stack.Screen options={{ title: t('changePassword') }} />
			<View style={styles.container}>
				<Text style={styles.label}>{t('oldPassword')}</Text>
				<CustomInputComponent
					name='oldPassword'
					text='password'
					inputType='password'
					placeholder={t('enterOldPassword')}
					secureTextEntry={true}
					onChangeText={(text) => setValue('oldPassword', text)}
					value={watch('oldPassword')}
					onBlur={() => methods.trigger('oldPassword')} // Trigger validation
				/>
				{errors.oldPassword && (
					<Text style={{ color: 'red', fontSize: 12 }}>
						{errors.oldPassword.message}
					</Text>
				)}

				<Text style={styles.label}>{t('newPassword')}</Text>
				<CustomInputComponent
					name='newPassword'
					text='password'
					inputType='password'
					placeholder={t('enterNewPassword')}
					secureTextEntry={true}
					onChangeText={(text) => setValue('newPassword', text)}
					value={watch('newPassword')}
					onBlur={() => methods.trigger('newPassword')} // Trigger validation
				/>
				{errors.newPassword && (
					<Text style={{ color: 'red', fontSize: 12 }}>
						{errors.newPassword.message}
					</Text>
				)}

				<Text style={styles.label}>{t('confirmPassword')}</Text>
				<CustomInputComponent
					name='confirmPassword'
					inputType='password'
					text='password'
					placeholder={t('confirmNewPassword')}
					secureTextEntry={true}
					onChangeText={(text) => setValue('confirmPassword', text)}
					value={watch('confirmPassword')}
					onBlur={() => methods.trigger('confirmPassword')} // Trigger validation
				/>
				{errors.confirmPassword && (
					<Text style={{ color: 'red', fontSize: 12 }}>
						{errors.confirmPassword.message}
					</Text>
				)}

				<TouchableOpacity
					style={styles.button}
					onPress={methods.handleSubmit(onSubmit)}
				>
					<Text style={styles.buttonText}>{t('changePassword')}</Text>
				</TouchableOpacity>
			</View>
		</FormProvider>
	);
}
