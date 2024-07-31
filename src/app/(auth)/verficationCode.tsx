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
import SelectLanuageComponent from '@/components/SelectLanguage';
import CustomInputComponent from '@/components/CustomInput';
import SubmitButtonComponent from '@/components/SubmitButton';
import { VerifyFormValue } from '@/types/verifyCode.type';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

function verify() {
  const { t } = useTranslation();
  const phone_label = t('login');

  const methods = useForm<VerifyFormValue>({
    defaultValues: {
      email: '',
    },
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
              flex: 1,
              margin: 3,
              padding: 5,
              marginTop: 25,
              backgroundColor: 'white',
            }}
          >
            <FormProvider {...methods}>
              <View style={{ left: '65%' }}>
                <SelectLanuageComponent />
              </View>
              <Text style={styles.title}>Verify Code</Text>
              <Text style={styles.subtitle}>
                Please enter the code sent to your email
              </Text>
              <Text style={styles.email}>example@gmail.com</Text>

              <CustomInputComponent name="verification code" text="" />

              <Text style={styles.noOTPText}>Didn't receive OTP? </Text>
              <TouchableOpacity>
                <Text style={styles.resendText}>Resend Code</Text>
              </TouchableOpacity>

              <SubmitButtonComponent
                onPress={methods.handleSubmit(onSubmit)}
                mode="contained"
              >
                Verify
              </SubmitButtonComponent>
            </FormProvider>
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 15,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#989898',
    paddingTop: 13,
    paddingBottom: 8,
  },
  email: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FF8B20',
    paddingBottom: 25,
  },
  noOTPText: {
    fontSize: 15,
    textAlign: 'center',
  },
  resendText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#FF8B20',
    textDecorationLine: 'underline',
    paddingBottom: 23,
    paddingTop: 5,
  },
});

export default verify;
