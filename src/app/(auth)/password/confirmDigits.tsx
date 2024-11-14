import {
	Text,
	TextInput,
	View,
	TouchableOpacity,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	StatusBar,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTranslation } from 'react-i18next';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import {
	useForgetPassword,
	useLogin,
	useValidateCode,
} from '@/services/api/auth';
import Loading from '@/components/Loading';
import { COLORS } from '@/constants/Colors';
import SubmitButtonComponent from '@/components/SubmitButton';
import { router } from 'expo-router';
import SelectLanuageComponent from '@/components/SelectLanguage';
import { Ionicons } from '@expo/vector-icons';
import {
	FormProvider,
	useForm,
	useFormContext,
	Controller,
} from 'react-hook-form';
import {
	sendEamilValues,
	validationFormValues,
	validationValues,
} from '@/types/login.type';
import { getItem } from '@/utils/storage';
import CustomInputComponent from '@/components/CustomInput';

// Define SixDigitCodeInput separately
// Define SixDigitCodeInput separately
const SixDigitCodeInput = () => {
	const [code, setCode] = useState(['', '', '', '', '', '']);
	const { control } = useFormContext();
	const inputRefs = useRef<(TextInput | null)[]>([]);

	const handleChangeText = (text: string, index: number) => {
		const newCode = [...code];
		newCode[index] = text;
		setCode(newCode);

		// Automatically focus next input if there's a value and it's not the last one
		if (text && index < 5 && inputRefs.current[index + 1]) {
			inputRefs.current[index + 1]?.focus();
		}
	};

	const handleKeyPress = (e: any, index: number) => {
		// Backspace to move focus to previous box
		if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
			inputRefs.current[index - 1]?.focus();
		}
	};

	const { t } = useTranslation();
	const digitCode = t('digitCode');

	return (
		<View style={styles.container}>
			<Text style={styles.label}>{digitCode}</Text>
			<View style={styles.inputContainer}>
				{code.map((digit, index) => (
					<Controller
						key={index}
						control={control}
						name={`resetCode[${index}]`}
						defaultValue=''
						render={({ field: { onChange, value } }) => (
							<TextInput
								style={styles.input}
								value={value}
								onChangeText={(text) => {
									onChange(text);
									handleChangeText(text, index);
								}}
								onKeyPress={(e) => handleKeyPress(e, index)}
								keyboardType='numeric'
								maxLength={1}
								ref={(ref) => (inputRefs.current[index] = ref)}
							/>
						)}
					/>
				))}
			</View>
		</View>
	);
};

function confirmDigits() {
	const { mutateValidate, isPending } = useValidateCode();
	const { mutateForgetPassword } = useForgetPassword();
	const methods = useForm<validationFormValues>();

	const { t } = useTranslation();
	const verifyCode = t('verifyCode');
	const enterDigits = t('enterDigits');
	const Submit = t('Submit');
	const didnotRecieveCode = t('didnotRecieveCode');
	const ResendCode = t('ResendCode');

	const resendCode = async () => {
		const email = await getItem('forget-email');
		mutateForgetPassword({ email: typeof email === 'string' ? email : '' });
	};
	const onSubmit = async (data: validationFormValues) => {
		const email =
			(await getItem('forget-email')) || (await getItem('new-user-email'));
		const info: validationValues = {
			resetCode: data.resetCode.join(''),
			email: typeof email === 'string' ? email : '',
		};
		console.log(info);
		mutateValidate(info);
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
							<View>
								<View>
									<TouchableOpacity onPress={() => router.back()}>
										<Ionicons
											name='arrow-back'
											size={35}
											color='black'
											style={{ marginRight: scale(25) }}
										/>
									</TouchableOpacity>
								</View>
								<Text style={styles.title}>{verifyCode}</Text>
								<Text style={styles.subtitle}>{enterDigits}</Text>
								<FormProvider {...methods}>
									{/* Use the SixDigitCodeInput here */}
									<SixDigitCodeInput />

									<SubmitButtonComponent
										onPress={methods.handleSubmit(onSubmit)}
										title={Submit}
										fullWidth
									/>
								</FormProvider>
								<Text style={styles.notRecieve}>{didnotRecieveCode}</Text>
								<TouchableOpacity onPress={() => resendCode()}>
									<Text style={styles.Resend}>{ResendCode}</Text>
								</TouchableOpacity>
							</View>
						)}
					</View>
				</SafeAreaView>
			</KeyboardAwareScrollView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	label: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	inputContainer: {
		flexDirection: 'row',
		marginBottom: verticalScale(15),
	},
	input: {
		borderWidth: 2,
		borderColor: COLORS.primary,
		width: scale(50),
		height: verticalScale(50),
		textAlign: 'center',
		fontSize: 18,
		marginHorizontal: scale(1),
		borderRadius: 15,
	},
	forgetPassContainer: {
		marginTop: scale(5),
		alignItems: 'center',
	},
	forgetPassText: {
		color: COLORS.primary,
		textAlign: 'right',
		textDecorationLine: 'underline',
		marginBottom: verticalScale(15),
	},
	title: {
		fontSize: 28,
		textAlign: 'center',
		fontWeight: 'bold',
		paddingTop: scale(10),
	},
	subtitle: {
		fontSize: 20,
		textAlign: 'center',
		color: COLORS.gray,
		paddingTop: scale(10),
		paddingBottom: scale(17),
	},
	notRecieve: {
		textAlign: 'center',
		marginTop: verticalScale(15),
		fontSize: moderateScale(16),
	},
	Resend: {
		textAlign: 'center',
		marginBottom: verticalScale(10),
		fontSize: moderateScale(16),
		color: COLORS.primary,
	},
});

export default confirmDigits;
