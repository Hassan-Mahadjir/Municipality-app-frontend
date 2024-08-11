import {
	Text,
	View,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
} from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import VerficationInputComponent from '@/components/VerificationInput';
import SubmitButtonComponent from '@/components/SubmitButton';
import { VerifyFormValue } from '@/types/verifyCode.type';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { router } from 'expo-router';

import { styles } from '@/styles/verfication';

function verify() {
	const { t } = useTranslation();
	const verifyCode = t('verifyCode');
	const enterCodeMsg = t('enterCodeMsg');
	const didnotReceive = t('didnotReceive');
	const resend = t('resend');
	const verify = t('verify');

	const methods = useForm<VerifyFormValue>({
		defaultValues: {},
	});

	const onSubmit = (data: any) => {
		console.log('login form: ', data);
		router.push('./verified');
	};

	return (
		<KeyboardAvoidingView
			style={{ flex: 1, backgroundColor: '#fff' }}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
		>
			<KeyboardAwareScrollView>
				<SafeAreaView style={{ flex: 1 }}>
					<View
						style={{
							margin: 10,
							padding: 5,
							marginVertical: 25,
							backgroundColor: 'white',
						}}
					>
						<FormProvider {...methods}>
							<Text style={styles.title}>{verifyCode}</Text>
							<Text style={styles.subtitle}>{enterCodeMsg}</Text>
							<Text style={styles.email}>example@gmail.com</Text>

							<VerficationInputComponent name='verification code' text='' />

							<Text style={styles.noOTPText}>{didnotReceive} </Text>
							<TouchableOpacity>
								<Text style={styles.resendText}>{resend}</Text>
							</TouchableOpacity>

							<SubmitButtonComponent
								onPress={methods.handleSubmit(onSubmit)}
								mode='contained'
							>
								{verify}
							</SubmitButtonComponent>
						</FormProvider>
					</View>
				</SafeAreaView>
			</KeyboardAwareScrollView>
		</KeyboardAvoidingView>
	);
}

export default verify;
