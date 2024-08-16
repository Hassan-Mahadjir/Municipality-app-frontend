import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Text, View, TouchableOpacity } from 'react-native';
import { TextInput, TextInputProps } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters';
import { COLORS } from '@/constants/Colors';

type CustomInputProps = {
	name: string;
	text: string;
	inputType?:
		| 'text'
		| 'password'
		| 'email'
		| 'firstName'
		| 'lastName'
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
				return 'example.gmail.com';
			case 'firstName':
				return 'e.g Hassan';
			case 'lastName':
				return 'e.g Barakat';
			case 'confirmPassword':
				return 'confirm Password';
			default:
				return '';
		}
	};

	return (
		<>
			{text && (
				<Text style={{ fontSize: 18, marginBottom: scale(5) }}>{text}</Text>
			)}
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
								paddingBottom: scale(5),
							}}
						>
							<TextInput
								textColor='#000'
								value={value}
								onChangeText={(val) => onChange(val)}
								onBlur={onBlur}
								mode='outlined'
								placeholder={getPlaceholder()}
								outlineColor={COLORS.gray}
								returnKeyType='next'
								outlineStyle={{ borderRadius: scale(10) }}
								activeOutlineColor={COLORS.primary}
								secureTextEntry={inputType === 'password' && secureTextEntry}
								{...props}
								style={{
									height: scale(30),
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
										top: scale(5),
									}}
								>
									<MaterialIcons
										name={secureTextEntry ? 'visibility' : 'visibility-off'}
										size={24}
										color={COLORS.primary}
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
