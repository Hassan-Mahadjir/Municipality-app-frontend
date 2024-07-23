import { Text, View } from 'react-native';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Link, router } from 'expo-router';
import { useTranslation } from 'react-i18next';

import PhoneInputComponent from '@/components/PhoneInput';
import CustomInputComponent from '@/components/CustomInput';
import SubmitButtonComponent from '@/components/SubmitButton';
import { LoginFormValues } from '@/types/login.type';

function Login() {
  const { t } = useTranslation();

  const methods = useForm<LoginFormValues>({
    defaultValues: {
      phone: '',
      password: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log('login form: ', data);
  };

  return (
    <View style={{ flex: 1 }}>
      <FormProvider {...methods}>
        <PhoneInputComponent />
        <CustomInputComponent
          text={t('password')}
          name="password"
          inputType="password"
        />
        <CustomInputComponent text="text" name="text" inputType="text" />
        <SubmitButtonComponent
          mode="contained"
          onPress={methods.handleSubmit(onSubmit)} // Ensure handleSubmit is called properly
        >
          {t('send_data')}
        </SubmitButtonComponent>
      </FormProvider>
    </View>
  );
}

export default Login;
