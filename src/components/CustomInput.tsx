import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Text, View, TouchableOpacity } from 'react-native';
import { TextInput, TextInputProps } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
<<<<<<< HEAD
import { scale } from 'react-native-size-matters';
=======
import { scale, verticalScale } from 'react-native-size-matters';
>>>>>>> 4e2582932f176892c846e2a9933a2a6bdc1d75e3
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
<<<<<<< HEAD
								paddingBottom: scale(5),
=======
								paddingBottom: verticalScale(5),
>>>>>>> 4e2582932f176892c846e2a9933a2a6bdc1d75e3
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
<<<<<<< HEAD
									height: scale(30),
=======
									height: verticalScale(30),
>>>>>>> 4e2582932f176892c846e2a9933a2a6bdc1d75e3
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
<<<<<<< HEAD
										top: scale(5),
=======
										top: verticalScale(5),
>>>>>>> 4e2582932f176892c846e2a9933a2a6bdc1d75e3
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
