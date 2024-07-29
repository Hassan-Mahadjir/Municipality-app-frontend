import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Text, View, TouchableOpacity } from 'react-native';
import { TextInput, TextInputProps } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

type CustomInputProps = {
  name: string;
  text: string;
  inputType?:
    | 'text'
    | 'password'
    | 'email'
    | 'firstName'
    | 'lastName'
    | 'userName'
    | 'confirmPassword'; // Define input types
  rules?: any;
};

const CustomInputComponent = ({
  name,
  rules,
  text,
  inputType = 'text', // Default parameter for inputType
  ...props
}: TextInputProps & CustomInputProps) => {
  const { control } = useFormContext();

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const toggleSecureEntry = () => {
    setSecureTextEntry((prev) => !prev);
  };

  const getPlaceholder = () => {
    switch (inputType) {
      case 'password':
        return '********';
      case 'email':
        return 'Email Address';
      case 'firstName':
        return 'First Name';
      case 'lastName':
        return 'Last Name';
      case 'userName':
        return 'User Name';
      case 'confirmPassword':
        return 'confirm Password';
      default:
        return 'Enter text';
    }
  };

  return (
    <>
      {text && <Text style={{ fontSize: 18, marginBottom: 8 }}>{text}</Text>}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <View
              style={{
                position: 'relative',
                width: '100%',
                paddingBottom:20,
              }}
            >
              <TextInput
                textColor="#000"
                value={value}
                onChangeText={(val) => onChange(val)}
                onBlur={onBlur}
                mode="outlined"
                placeholder={getPlaceholder()}
                outlineColor="#848484"
                outlineStyle={{ borderRadius: 12 }}
                activeOutlineColor="#FF8B20"
                secureTextEntry={inputType === 'password' && secureTextEntry}
                {...props}
                style={{
                  height: 45,
                  backgroundColor: '#fff',
                  paddingRight: inputType === 'password' ? 40 : 0,
                }} // Add padding to make space for the toggle button
              />
              {inputType === 'password' && (
                <TouchableOpacity
                  onPress={toggleSecureEntry}
                  style={{
                    position: 'absolute',
                    right: 10,
                    top: 10,
                  }}
                >
                  <MaterialIcons
                    name={secureTextEntry ? 'visibility' : 'visibility-off'}
                    size={24}
                    color="#FF8B20"
                  />
                </TouchableOpacity>
              )}
            </View>
            {error && (
              <Text style={{ color: 'red' }}>{error.message || 'Error'}</Text>
            )}
          </>
        )}
      />
    </>
  );
};

export default CustomInputComponent;
