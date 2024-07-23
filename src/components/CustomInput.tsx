import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Text, View, TouchableOpacity } from 'react-native';
import { TextInput, TextInputProps } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

type CustomInputProps = {
  name: string;
  text: string;
  inputType?: 'text' | 'password'; // Define input types as text or password
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
              }}
            >
              <TextInput
                textColor="#000"
                value={value}
                onChangeText={(val) => onChange(val)}
                onBlur={onBlur}
                mode="outlined"
                outlineColor="#848484"
                outlineStyle={{ borderRadius: 12 }}
                activeOutlineColor="#FF8B20"
                secureTextEntry={inputType === 'password' && secureTextEntry}
                {...props}
                style={{
                  height: 50,
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
                    top: 13,
                  }}
                >
                  <MaterialIcons
                    name={secureTextEntry ? 'visibility' : 'visibility-off'}
                    size={24}
                    color="black"
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
