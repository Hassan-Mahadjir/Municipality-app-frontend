import {
	Text,
	TextInput,
	View,
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	StatusBar,
	TouchableOpacity,
} from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';
import React, { useRef } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SelectLanuageComponent from '@/components/SelectLanguage';
import CustomInputComponent from '@/components/CustomInput';
import SubmitButtonComponent from '@/components/SubmitButton';
import { LoginFormValues, ResetPassword } from '@/types/login.type';
import { useTranslation } from 'react-i18next';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { styles } from '@/styles/signIn';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLogin, useResetPassword } from '@/services/api/auth';
import Loading from '@/components/Loading';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { getItem } from '@/utils/storage';

function Login() {
	const { mutateResetPassword, isPending } = useResetPassword();
	const { t } = useTranslation();
	const newPassword = t('newPassword');
	const differentPassword = t('differentPassword');
	const newPass = t('newPass');
	const confirmNewPass = t('confirmNewPass');
	const Submit = t('Submit');
	const passwordValidation = t('passwordValidation');

	const NewPasswordRef = useRef<TextInput>(null);
	const ConfirmPasswordRef = useRef<TextInput>(null);

	const formSchema = z
		.object({
			password: z.string().min(6, { message: passwordValidation }),
			confirmPassword: z.string().min(6, { message: passwordValidation }),
		})
		.refine((data) => data.password === data.confirmPassword, {
			message: 'Passwords do not match',
			path: ['confirmPassword'],
		});

	const methods = useForm<ResetPassword>({
		defaultValues: {
			password: '',
		},
		resolver: zodResolver(formSchema),
	});

	const onSubmit = async (data: ResetPassword) => {
		const email = await getItem('forget-email');
		const info = {
			email: typeof email === 'string' ? email : '',
			password: data.password,
		};
		console.log(info);
		mutateResetPassword(info);
	};

	return (
		<KeyboardAvoidingView
			style={{ flex: 1, backgroundColor: '#fff' }}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
		>
			<KeyboardAwareScrollView>
				<SafeAreaView style={{ flex: 1 }}>
					<StatusBar barStyle={'dark-content'} />
					<View
						style={{
							flex: 1,
							margin: scale(5),
							padding: scale(5),
							marginVertical: verticalScale(0),
							backgroundColor: '#fff',
						}}
					>
						{isPending ? (
							<Loading />
						) : (
							<FormProvider {...methods}>
								<View>
									<TouchableOpacity onPress={() => router.back()}>
										<Ionicons
											name='arrow-back'
											size={36}
											color='black'
											style={{ marginRight: scale(25) }}
										/>
									</TouchableOpacity>
								</View>
								<Text style={styles.title}>{newPassword}</Text>
								<Text style={styles.subtitle}>{differentPassword}</Text>
								<CustomInputComponent
									name='password'
									text={newPass}
									inputType='password'
									returnKeyType='next'
									ref={NewPasswordRef}
									onSubmitEditing={() => ConfirmPasswordRef.current?.focus()}
								/>
								<CustomInputComponent
									name='confirmPassword'
									text={confirmNewPass}
									inputType='password'
									returnKeyType='done'
									ref={ConfirmPasswordRef}
								/>
								<View style={{ height: verticalScale(15) }} />
								<SubmitButtonComponent
									onPress={methods.handleSubmit(onSubmit)}
									title={Submit}
									fullWidth
								/>
							</FormProvider>
						)}
					</View>
				</SafeAreaView>
			</KeyboardAwareScrollView>
		</KeyboardAvoidingView>
	);
}

export default Login;
