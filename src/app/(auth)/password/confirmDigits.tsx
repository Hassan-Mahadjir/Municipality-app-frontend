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
import { scale, verticalScale } from 'react-native-size-matters';
import { useLogin } from '@/services/api/auth';
import Loading from '@/components/Loading';
import { COLORS } from '@/constants/Colors';
import SubmitButtonComponent from '@/components/SubmitButton';
import { router } from 'expo-router';
import SelectLanuageComponent from '@/components/SelectLanguage';
import { Ionicons } from '@expo/vector-icons';

// Define SixDigitCodeInput separately
const SixDigitCodeInput = () => {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    
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
    const digitCode = t('digitCode')

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{digitCode}</Text>
            <View style={styles.inputContainer}>
                {code.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
                        value={digit}
                        onChangeText={(text) => handleChangeText(text, index)}
                        onKeyPress={(e) => handleKeyPress(e, index)}
                        keyboardType="numeric"
                        maxLength={1}
                        ref={(ref) => (inputRefs.current[index] = ref)}
                    />
                ))}
            </View>
        </View>
    );
};

function confirmDigits() {
	const { mutateLogin, isPending } = useLogin();

	const { t } = useTranslation();
    const checkEmail = t('checkEmail');
    const enterDigits = t('enterDigits');
    const resend = t('resend');
    const Submit = t('Submit');

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
							<View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                                    <TouchableOpacity onPress={()=> router.back()}>
                                        <Ionicons name="arrow-back" size={24} color="black" />
                                    </TouchableOpacity>
                                    <View style={{ position: 'relative', marginLeft: '75%' }}>
                                        <SelectLanuageComponent />
                                    </View>
                                </View>
								<Text style={styles.title}>{checkEmail}</Text>
								<Text style={styles.subtitle}>{enterDigits}</Text>

                                {/* Use the SixDigitCodeInput here */}
								<SixDigitCodeInput />

                                <View style={styles.forgetPassContainer}>
									<TouchableOpacity>
										<Text style={styles.forgetPassText}>{resend}</Text>
									</TouchableOpacity>
								</View>

                                <SubmitButtonComponent
									onPress={() => router.push('/(auth)/password/newPassword')}
									title={Submit}
									fullWidth
								/>
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
      justifyContent: 'space-between',
      width: '50%',
      marginBottom: verticalScale(15)
    },
    input: {
      borderWidth: 2,
      borderColor: COLORS.primary, 
      width: 50,
      height: 50,
      textAlign: 'center',
      fontSize: 18,
      borderRadius: 8, // Rounded corners
    },
    forgetPassContainer: {
		marginTop: scale(5),
		alignItems: "center"
	},
	forgetPassText: {
		color: COLORS.primary,
		textAlign: 'right',
		textDecorationLine: 'underline',
        marginBottom: verticalScale(15)
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
});

export default confirmDigits;
