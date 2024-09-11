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
import { LoginFormValues } from '@/types/login.type';
import { useTranslation } from 'react-i18next';
import { scale, verticalScale } from 'react-native-size-matters';
import { styles } from '@/styles/signIn';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLogin } from '@/services/api/auth';
import Loading from '@/components/Loading';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

function Login() {
    const { mutateLogin, isPending } = useLogin();
    const { t } = useTranslation();
    const newPassword = t('newPassword');
    const differentPassword = t('differentPassword');
    const newPass = t('newPass');
    const confirmNewPass = t('confirmNewPass');
    const Submit = t('Submit');
    const passwordValidation = t('passwordValidation');

    const passwordRef = useRef<TextInput>(null);

    const formSchema = z.object({
        password: z.string().min(6, { message: passwordValidation }),
        confirmPassword: z.string().min(6, { message: passwordValidation }),
    }).refine(data => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

    const methods = useForm<LoginFormValues>({
        defaultValues: {
            password: ''
        },
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: LoginFormValues) => {
        console.log('login form: ', data);
        mutateLogin(data);
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
                                <Text style={styles.title}>{newPassword}</Text>
                                <Text style={styles.subtitle}>{differentPassword}</Text>
                                <CustomInputComponent
                                    name='password'
                                    text={newPass}
                                    inputType='password'
                                    returnKeyType='done'
                                    ref={passwordRef}
                                />
                                <CustomInputComponent
                                    name='confirmPassword'
                                    text={confirmNewPass}
                                    inputType='password'
                                    returnKeyType='done'
                                    ref={passwordRef}
                                />
                                <View style={{height: verticalScale(15)}}/>
                                <SubmitButtonComponent
                                    onPress={() => router.push('/(auth)/password/successfullyChanged')}
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
