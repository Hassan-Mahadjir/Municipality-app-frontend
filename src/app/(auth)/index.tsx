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
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SelectLanuageComponent from '@/components/SelectLanguage';
import CustomInputComponent from '@/components/CustomInput';
import SubmitButtonComponent from '@/components/SubmitButton';
import { LoginFormValues } from '@/types/login.type';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';

function Login() {
  const { t } = useTranslation();
  const phone_label = t('login');

  const methods = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log('login form: ', data);
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
              // flex: 1,
              margin: 5,
              padding: 5,
              paddingVertical: 35,
              backgroundColor: 'white',
            }}
          >
            <FormProvider {...methods}>
              <View style={{ left: '65%' }}>
                <SelectLanuageComponent />
              </View>

              <Text style={styles.title}>Sign In</Text>
              <Text style={styles.subtitle}>
                Welcome back, you've been missed
              </Text>
              <CustomInputComponent
                name="email"
                text="Email"
                inputType="email"
              />
              <CustomInputComponent
                name="password"
                text="Password"
                inputType="password"
              />
              <TouchableOpacity>
                <Text style={styles.fpass}>Forgot Password?</Text>
              </TouchableOpacity>
              <View style={styles.horizontalLineContainer}>
                <View style={styles.horizontalLine} />
                <Text style={styles.orText}>Or Sign in with</Text>
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
                    uri: 'https://pixsector.com/cache/56f2646e/avd5cee2ff5ea9da4d328.png',
                  }}
                  style={styles.icon}
                />
                <Text style={styles.appleText}>Apple</Text>
              </TouchableOpacity>

              <View style={styles.signupContainer}>
                <Text style={styles.noAccountText}>
                  Don't have an account?{' '}
                </Text>
                <TouchableOpacity>
                  <Text style={styles.signupText}>Sign Up</Text>
                </TouchableOpacity>
              </View>

              <SubmitButtonComponent
                onPress={methods.handleSubmit(onSubmit)}
                mode="contained"
              >
                {phone_label}
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
    paddingBottom: 17,
  },
  fpass: {
    textAlign: 'right',
    paddingBottom: 15,
    paddingTop: 3,
    color: '#FF8B20',
    textDecorationLine: 'underline',
  },
  horizontalLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#000',
  },
  orText: {
    marginHorizontal: 10,
  },
  googleButton: {
    borderWidth: 1,
    borderColor: '#FE834B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleText: {
    color: '#FE834B',
    marginLeft: 10,
  },
  appleButton: {
    borderWidth: 1,
    borderColor: '#FE834B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appleText: {
    color: '#FE834B',
    marginLeft: 10,
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    paddingBottom: 10,
    marginLeft: 200,
    marginBottom: 3,
  },
  noAccountText: {
    color: '#989898',
  },
  signupText: {
    color: '#FE834B',
    textDecorationLine: 'underline',
  },
  icon: {
    width: 20,
    height: 20,
  },
  buttonContainer: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    borderRadius: 30,
    flexDirection: 'row',
  },
});

export default Login;
