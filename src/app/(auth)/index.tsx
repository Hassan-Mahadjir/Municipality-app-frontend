import { Text, View } from 'react-native';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Link, router } from 'expo-router';
import { useTranslation } from 'react-i18next';

import PhoneInputComponent from '@/components/PhoneInput';
import CustomInputComponent from '@/components/CustomInput';
import SubmitButtonComponent from '@/components/SubmitButton';
import SelectLanuageComponent from '@/components/SelectLanguage';
import { LoginFormValues } from '@/types/login.type';

function Login() {
  const { t } = useTranslation();

  const phone_lable = t('login');

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
    <View style={{ flex: 1, margin: 20 }}>
      <FormProvider {...methods}>
        <SelectLanuageComponent />
        <PhoneInputComponent />
        <CustomInputComponent
          name="username"
          text="Password"
          inputType="password"
        />
        <CustomInputComponent
          name="username"
          text="Password"
          inputType="password"
        />
        <Text className="font-bold text-center">Tailwind</Text>
        <SubmitButtonComponent
          onPress={methods.handleSubmit(onSubmit)}
          mode="contained"
        >
          {phone_lable}
        </SubmitButtonComponent>
      </FormProvider>
    </View>
  );
}

export default Login;
