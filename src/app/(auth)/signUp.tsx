import {
	Text,
	View,
	TouchableOpacity,
	TextInput,
	Image,
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	StatusBar,
} from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';
import React, { useRef, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SelectLanuageComponent from '@/components/SelectLanguage';
import CustomInputComponent from '@/components/CustomInput';
import SubmitButtonComponent from '@/components/SubmitButton';
import { RegisterFormValues } from '@/types/register.type';
import { useTranslation } from 'react-i18next';
import { Checkbox } from 'react-native-paper';
import { router } from 'expo-router';
import { COLORS } from '@/constants/Colors';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { z } from 'zod';

import { styles } from '@/styles/signUp';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegister } from '@/services/api/auth';
import Loading from '@/components/Loading';
import { setItem } from '@/utils/storage';

function signUp() {
	const { mutateRegister, isPending } = useRegister();
	const { t, i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();
	const creatAcount = t('createAccount');
	const createAccoutDescription = t('createAccoutDescription');
	const firstName = t('firstName');
	const lastName = t('lastName');
	const email = t('email');
	const password = t('password');
	const confirmPassword = t('confirmPassword');
	const termsConditions = t('termsConditions');
	const signup = t('signup');
	const signin = t('signin');
	const signUpWith = t('signUpWith');
	const haveAccount = t('haveAccount');

	const firstNameValidation = t('firstNameValidation');
	const lastNameValidation = t('lastNameValidation');
	const passwordValidation = t('passwordValidation');
	const emailValidation = t('emailValidation');
	const passwordDontMatch = t('passwordDontMatch');

	// References
	const firstNameRef = useRef<TextInput>(null);
	const lastNameRef = useRef<TextInput>(null);
	const emailRef = useRef<TextInput>(null);
	const passwordRef = useRef<TextInput>(null);
	const confirmPasswordRef = useRef<TextInput>(null);

	// Validation
	const formSchema = z
		.object({
			firstName: z.string().min(1, { message: firstNameValidation }),
			lastName: z.string().min(1, { message: lastNameValidation }),
			email: z.string().email({ message: emailValidation }),
			password: z.string().min(6, { message: passwordValidation }),
			confirmPassword: z.string().min(6, { message: passwordValidation }),
		})
		.refine((data) => data.password === data.confirmPassword, {
			message: passwordDontMatch,
			path: ['confirmPassword'], // Field to attach the error message to
		});

	const methods = useForm<RegisterFormValues>({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		resolver: zodResolver(formSchema),
	});

	const onSubmit = (data: RegisterFormValues) => {
		console.log('Register form: ', data);
		setItem('new-user-email', data.email);
		const registerData = {
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			password: data.password,
			confirmPassword: data.confirmPassword,
			language: lang,
		};
		mutateRegister(registerData);
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
							marginVertical: verticalScale(0),
							backgroundColor: '#fff',
						}}
					>
						{isPending ? (
							<Loading />
						) : (
							<FormProvider {...methods}>
								<View
									style={{
										position: 'relative',
										marginLeft: moderateScale(230),
									}}
								>
									<SelectLanuageComponent />
								</View>
								<Text style={styles.title}>{creatAcount}</Text>
								<Text style={styles.subtitle}>{createAccoutDescription}</Text>
								<CustomInputComponent
									name='firstName'
									text={firstName}
									inputType='firstName'
									returnKeyType='next'
									ref={firstNameRef}
									onSubmitEditing={() => lastNameRef.current?.focus()}
								/>
								<CustomInputComponent
									name='lastName'
									text={lastName}
									inputType='lastName'
									returnKeyType='next'
									ref={lastNameRef}
									onSubmitEditing={() => emailRef.current?.focus()}
								/>
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
									returnKeyType='next'
									ref={passwordRef}
									onSubmitEditing={() => confirmPasswordRef.current?.focus()}
								/>
								<CustomInputComponent
									name='confirmPassword'
									text={confirmPassword}
									inputType='password'
									returnKeyType='done'
									ref={confirmPasswordRef}
									// onSubmitEditing={methods.handleSubmit(onSubmit)}
								/>
								<View style={styles.checkboxContainer}>
									<View
										style={{
											borderColor: COLORS.primary,
											borderWidth: 0.5,
											marginRight: scale(8),
											width: scale(30),
											borderRadius: scale(8),
											height: verticalScale(25),
										}}
									>
										<Checkbox
											status={checked ? 'checked' : 'unchecked'}
											onPress={() => setChecked(!checked)}
											color={COLORS.primary}
											uncheckedColor={COLORS.primary}
										/>
									</View>
									<TouchableOpacity
										onPress={() => alert('Terms & Conditions clicked')}
									>
										<Text style={styles.checkboxLabel}>
											<Text style={styles.link}>{termsConditions}</Text>
										</Text>
									</TouchableOpacity>
								</View>
								<SubmitButtonComponent
									onPress={() => {
										if (!checked) {
											alert(
												'Please agree to the Terms & Conditions to proceed.'
											);
										} else {
											methods.handleSubmit(onSubmit)();
										}
									}}
									title={signup}
									fullWidth
									// disabled={!checked}
								/>
								{/* <View style={styles.horizontalLineContainer}>
									<View style={styles.horizontalLine} />
									<Text style={styles.orText}>{signUpWith}</Text>
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
								</TouchableOpacity> */}

								<View style={styles.signupContainer}>
									<Text style={styles.noAccountText}>{haveAccount} </Text>
									<TouchableOpacity onPress={() => router.push('/')}>
										<Text style={styles.signupText}>{signin}</Text>
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

export default signUp;
