import {
	Text,
	TextInput,
	View,
	TouchableOpacity,
	Image,
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	StatusBar,
} from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';
import React, { useEffect, useRef, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SelectLanuageComponent from '@/components/SelectLanguage';
import CustomInputComponent from '@/components/CustomInput';
import SubmitButtonComponent from '@/components/SubmitButton';
import { LoginFormValues } from '@/types/login.type';
import { useTranslation } from 'react-i18next';
import { scale, verticalScale } from 'react-native-size-matters';
import { styles } from '@/styles/signIn';
import { Href, router } from 'expo-router';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useLogin } from '@/services/api/auth';

import axios from 'axios';
import Loading from '@/components/Loading';
function Login() {
	const { mutateLogin, isPending } = useLogin();

	const { t } = useTranslation();
	const signin = t('signin');
	const signup = t('signup');
	const welcomeBack = t('welcomeBack');
	const email = t('email');
	const password = t('password');
	const signInWith = t('signInWith');
	const donotHave = t('donotHave');
	const forgetPassword = t('forgetPassword');

	const passwordValidation = t('passwordValidation');
	const emailValidation = t('emailValidation');

	// References
	const emailRef = useRef<TextInput>(null);
	const passwordRef = useRef<TextInput>(null);

	const formSchema = z.object({
		email: z.string().email({ message: emailValidation }),
		password: z.string().min(6, { message: passwordValidation }),
	});

	const methods = useForm<LoginFormValues>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: zodResolver(formSchema),
	});

	const onSubmit = (data: LoginFormValues) => {
		console.log('login form: ', data);
		mutateLogin(data);
	};

	const [checked, setChecked] = useState(false);

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
							marginVertical: verticalScale(25),
							backgroundColor: '#fff',
						}}
					>
						{isPending ? (
							<Loading />
						) : (
							<FormProvider {...methods}>
								<View style={{ position: 'relative', marginLeft: '75%' }}>
									<SelectLanuageComponent />
								</View>
								<Text style={styles.title}>{signin}</Text>
								<Text style={styles.subtitle}>{welcomeBack}</Text>
								<CustomInputComponent
									name='email'
									text={email}
									inputType='email'
									returnKeyType='next'
									ref={emailRef}
									onSubmitEditing={() => passwordRef.current?.focus()}
								/>
								<CustomInputComponent
									name='password'
									text={password}
									inputType='password'
									returnKeyType='done'
									ref={passwordRef}
								/>

								<View style={styles.forgetPassContainer}>
									<TouchableOpacity onPress={() => router.push('/(auth)/password')}>
										<Text style={styles.forgetPassText}>{forgetPassword}</Text>
									</TouchableOpacity>
								</View>

								<SubmitButtonComponent
									onPress={methods.handleSubmit(onSubmit)}
									title={signin}
									fullWidth
								/>

								<View style={styles.horizontalLineContainer}>
									<View style={styles.horizontalLine} />
									<Text style={styles.orText}>{signInWith}</Text>
									<View style={styles.horizontalLine} />
								</View>
								<TouchableOpacity
									style={[styles.buttonContainer, styles.googleButton]}
								>
									<Image
										source={{
											uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8zU_yLBGMXMOzE3dpORNzgZ8vh09KsVyszg&s',
										}}
										style={styles.icon}
									/>
									<Text style={styles.googleText}>Google</Text>
								</TouchableOpacity>

								<View style={styles.signupContainer}>
									<Text style={styles.noAccountText}>{donotHave} </Text>
									<TouchableOpacity onPress={() => router.push('/signUp')}>
										<Text style={styles.signupText}>{signup}</Text>
									</TouchableOpacity>
								</View>
							</FormProvider>
						)}
					</View>
				</SafeAreaView>
			</KeyboardAwareScrollView>
		</KeyboardAvoidingView>
	);
}
export default Login;
