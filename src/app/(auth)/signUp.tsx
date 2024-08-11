import {
	Text,
	View,
	TouchableOpacity,
	Image,
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	StatusBar,
} from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SelectLanuageComponent from '@/components/SelectLanguage';
import CustomInputComponent from '@/components/CustomInput';
import SubmitButtonComponent from '@/components/SubmitButton';
import { RegisterFormValues } from '@/types/register.type';
import { useTranslation } from 'react-i18next';
import { Checkbox } from 'react-native-paper';
import { router } from 'expo-router';
import { COLORS } from '@/constants/Colors';
import { scale } from 'react-native-size-matters';

import { styles } from '@/styles/signUp';
function signUp() {
	const { t } = useTranslation();
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

	const methods = useForm<RegisterFormValues>({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	});

	const onSubmit = (data: any) => {
		console.log('Register form: ', data);
		router.push('./verficationCode');
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
							margin: 10,
							padding: 5,
							marginVertical: 25,
							backgroundColor: 'white',
						}}
					>
						<FormProvider {...methods}>
							<View style={{ left: scale(240) }}>
								<SelectLanuageComponent />
							</View>
							<Text style={styles.title}>{creatAcount}</Text>
							<Text style={styles.subtitle}>{createAccoutDescription}</Text>
							<CustomInputComponent
								name='firstName'
								text={firstName}
								inputType='firstName'
							/>
							<CustomInputComponent
								name='lastName'
								text={lastName}
								inputType='lastName'
							/>
							<CustomInputComponent
								name='email'
								text={email}
								inputType='email'
							/>
							<CustomInputComponent
								name='password'
								text={password}
								inputType='password'
							/>
							<CustomInputComponent
								name='confirmPassword'
								text={confirmPassword}
								inputType='password'
							/>
							<View style={styles.checkboxContainer}>
								<View>
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
								onPress={methods.handleSubmit(onSubmit)}
								mode='contained'
							>
								{signup}
							</SubmitButtonComponent>
							<View style={styles.horizontalLineContainer}>
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
							</TouchableOpacity>

							<TouchableOpacity
								style={[styles.buttonContainer, styles.appleButton]}
							>
								<Image
									source={{
										uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbT5z0ugE618RACSU2Uslw_LoM0IBFGaASeA&s',
									}}
									style={styles.icon}
								/>
								<Text style={styles.appleText}>Apple</Text>
							</TouchableOpacity>

							<View style={styles.signupContainer}>
								<Text style={styles.noAccountText}>{haveAccount} </Text>
								<TouchableOpacity onPress={() => router.push('/')}>
									<Text style={styles.signupText}>{signin}</Text>
								</TouchableOpacity>
							</View>
						</FormProvider>
					</View>
				</SafeAreaView>
			</KeyboardAwareScrollView>
		</KeyboardAvoidingView>
	);
}

export default signUp;
