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
import { RegisterFormValues } from '@/types/register.type';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { router } from 'expo-router';

function Login() {
  const { t } = useTranslation();
  const phone_label = t('login');

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
              margin: 3,
              padding: 5,
              marginVertical: 25,
              backgroundColor: 'white',
            }}
          >
            <FormProvider {...methods}>
              <View style={{ left: '65%' }}>
                <SelectLanuageComponent />
              </View>
              <Text style={styles.title}>Create Account</Text>
              <Text style={styles.subtitle}>
                Fill your information below or register with your social account
              </Text>
              <CustomInputComponent
                name="firstName"
                text="First Name"
                inputType="firstName"
              />
              <CustomInputComponent
                name="lastName"
                text="Last Name"
                inputType="lastName"
              />
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
              <CustomInputComponent
                name="confirmPassword"
                text="Confirm Password"
                inputType="password"
              />
              <View style={styles.checkboxContainer}>
                <View style={styles.checkboxWrapper}>
                  <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => setChecked(!checked)}
                    color="#FE834B"
                    uncheckedColor="#FE834B"
                  />
                </View>
                <TouchableOpacity
                  onPress={() => alert('Terms & Conditions clicked')}
                >
                  <Text style={styles.checkboxLabel}>
                    Agree with{' '}
                    <Text style={styles.link}>Terms & Conditions</Text>
                  </Text>
                </TouchableOpacity>
              </View>
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
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbT5z0ugE618RACSU2Uslw_LoM0IBFGaASeA&s',
                  }}
                  style={styles.icon}
                />
                <Text style={styles.appleText}>Apple</Text>
              </TouchableOpacity>

              <View style={styles.signupContainer}>
                <Text style={styles.noAccountText}>
                  Already have an account?{' '}
                </Text>
                <TouchableOpacity onPress={() => router.push('./signin')}>
                  <Text style={styles.signupText}>Sign In</Text>
                </TouchableOpacity>
              </View>

              <SubmitButtonComponent
                onPress={methods.handleSubmit(onSubmit)}
                mode="contained"
              >
                Sign Up
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
    marginLeft: 180,
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 6,
  },
  checkboxWrapper: {
    height: 35,
    width: 33,
    borderWidth: 1,
    borderColor: '#FE834B',
    borderRadius: 4,
    overflow: 'hidden',
    marginRight: 6,
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#000',
  },
  link: {
    color: '#FE834B',
  },
});

export default Login;
