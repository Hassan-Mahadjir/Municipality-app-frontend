import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { Stack } from 'expo-router';
import CustomInputComponent from '@/components/CustomInput';
import { styles } from '@/styles/password';
import { useChangePassword } from '@/services/api/auth';
import { ChangePassword } from '@/types/login.type';

type FormValues = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export default function PasswordScreen() {
  const { mutateChangePassword, isPending } = useChangePassword();
  const methods = useForm<FormValues>();
  const { register, setValue, watch, formState: { errors } } = methods;

  // Register inputs
  React.useEffect(() => {
    register('oldPassword');
    register('newPassword');
    register('confirmPassword');
  }, [register]);

  const onSubmit = (data: ChangePassword) => {
    mutateChangePassword(data)
 
  };

  return (
    <FormProvider {...methods}>
      <Stack.Screen options={{ title: 'Change Password' }} />
      <View style={styles.container}>
        <Text style={styles.label}>Old Password</Text>
        <CustomInputComponent
          name="oldPassword"
          text=""
          inputType="password"
          placeholder="Enter old password"
          secureTextEntry={true}
          onChangeText={(text) => setValue('oldPassword', text)}
          value={watch('oldPassword')}
          onBlur={() => methods.trigger('oldPassword')} // Trigger validation
        />
        {errors.oldPassword && <Text style={{ color: 'red', fontSize: 12 }}>{errors.oldPassword.message}</Text>}

        <Text style={styles.label}>New Password</Text>
        <CustomInputComponent
          name="newPassword"
          text=""
          inputType="password"
          placeholder="Enter new password"
          secureTextEntry={true}
          onChangeText={(text) => setValue('newPassword', text)}
          value={watch('newPassword')}
          onBlur={() => methods.trigger('newPassword')} // Trigger validation
        />
        {errors.newPassword && <Text style={{ color: 'red', fontSize: 12 }}>{errors.newPassword.message}</Text>}

        <Text style={styles.label}>Confirm Password</Text>
        <CustomInputComponent
          name="confirmPassword"
          text=""
          inputType="password"
          placeholder="Confirm new password"
          secureTextEntry={true}
          onChangeText={(text) => setValue('confirmPassword', text)}
          value={watch('confirmPassword')}
          onBlur={() => methods.trigger('confirmPassword')} // Trigger validation
        />
        {errors.confirmPassword && <Text style={{ color: 'red', fontSize: 12 }}>{errors.confirmPassword.message}</Text>}

        <TouchableOpacity
          style={styles.button}
          onPress={methods.handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </FormProvider>
  );
}
