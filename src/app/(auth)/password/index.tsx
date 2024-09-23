import {
	Text,
	TextInput,
	View,
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	StatusBar,
	TouchableOpacity
} from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';
import React, { useRef } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SelectLanuageComponent from '@/components/SelectLanguage';
import CustomInputComponent from '@/components/CustomInput';
import SubmitButtonComponent from '@/components/SubmitButton';
import { ForgotFormValues } from '@/types/login.type';
import { useTranslation } from 'react-i18next';
import { scale, verticalScale } from 'react-native-size-matters';
import { styles } from '@/styles/signIn';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { useForgetPassword, useLogin } from '@/services/api/auth';

import Loading from '@/components/Loading';
import { setItem } from '@/utils/storage';
function forgotPassword() {
	const { mutateForgetPassword,isPending } = useForgetPassword();

	const { t } = useTranslation();
	const forgotPassword = t('forgotPassword');
	const Submit = t('Submit');
	const enterEmail = t('enterEmail');
	const email = t('email');

	const emailValidation = t('emailValidation');

	// References
	const emailRef = useRef<TextInput>(null);

	const formSchema = z.object({
		email: z.string().email({ message: emailValidation }),
	});

	const methods = useForm<ForgotFormValues>({
		defaultValues: {
			email: ''
		},
		resolver: zodResolver(formSchema),
	});

	const onSubmit = (data: ForgotFormValues) => {
		console.log('login form: ', data);
		setItem('forget-email', data.email);
		mutateForgetPassword(data)
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
							marginVertical: verticalScale(25),
							backgroundColor: '#fff',
						}}
					>
						{isPending ? (
							<Loading />
						) : (
							<FormProvider {...methods}>
								<View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                                    <TouchableOpacity onPress={()=> router.back()}>
                                        <Ionicons name="arrow-back" size={24} color="black" />
                                    </TouchableOpacity>
                                    <View style={{ position: 'relative', marginLeft: '75%' }}>
                                        <SelectLanuageComponent />
                                    </View>
                                </View>
								<Text style={styles.title}>{forgotPassword}</Text>
								<Text style={styles.subtitle}>{enterEmail}</Text>
								<CustomInputComponent
									name='email'
									text={email}
									inputType='email'
									returnKeyType='next'
									ref={emailRef}
									onSubmitEditing={() => router.push('/(auth)/password/confirmDigits')}
								/>
								<View style={{height: verticalScale(15)}}/>
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
export default forgotPassword;
