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
import { LoginFormValues } from '@/types/login.type';
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-size-matters';
import { styles } from '@/styles/signIn';
import { router } from 'expo-router';

function Login() {
	const { t } = useTranslation();
	const signin = t('signin');
	const signup = t('signup');
	const welcomeBack = t('welcomeBack');
	const email = t('email');
	const password = t('password');
	const signInWith = t('signInWith');
	const donotHave = t('donotHave');
	const forgetPassword = t('forgetPassword');

	const methods = useForm<LoginFormValues>({
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = (data: any) => {
		console.log('login form: ', data);
		router.replace('/(user)');
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
							margin: 5,
							padding: 5,
							marginVertical: 25,
							backgroundColor: 'white',
						}}
					>
						<FormProvider {...methods}>
							<View style={{ left: scale(240) }}>
								<SelectLanuageComponent />
							</View>
							<Text style={styles.title}>{signin}</Text>
							<Text style={styles.subtitle}>{welcomeBack}</Text>
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

							<View style={styles.forgetPassContainer}>
								<TouchableOpacity>
									<Text style={styles.forgetPassText}>{forgetPassword}</Text>
								</TouchableOpacity>
							</View>

							<SubmitButtonComponent
								onPress={methods.handleSubmit(onSubmit)}
								mode='contained'
							>
								{signin}
							</SubmitButtonComponent>

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
								<Text style={styles.noAccountText}>{donotHave} </Text>
								<TouchableOpacity onPress={() => router.push('/signUp')}>
									<Text style={styles.signupText}>{signup}</Text>
								</TouchableOpacity>
							</View>
						</FormProvider>
					</View>
				</SafeAreaView>
			</KeyboardAwareScrollView>
		</KeyboardAvoidingView>
	);
}
export default Login;
