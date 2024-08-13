import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Text, View, TouchableOpacity } from 'react-native';
import { TextInput, TextInputProps } from 'react-native-paper';
import { scale, verticalScale } from 'react-native-size-matters';
import { COLORS } from '@/constants/Colors';

type CustomInputProps = {
	name: string;
	text: string;
	inputType?: 'text';
	// Define input types
	rules?: any;
};

const VerficationInputComponent = ({
	name,
	rules,
	text,
	inputType = 'text', // Default parameter for inputType
	...props
}: TextInputProps & CustomInputProps) => {
	const { control } = useFormContext();

	const getPlaceholder = () => {
		switch (inputType) {
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
								paddingBottom: verticalScale(5),
							}}
						>
							<TextInput
								textColor='#000'
								value={value}
								onChangeText={(val) => onChange(val)}
								onBlur={onBlur}
								mode='outlined'
								placeholder={getPlaceholder()}
								outlineColor='#848484'
								returnKeyType='done'
								keyboardType='numeric'
								outlineStyle={{ borderRadius: scale(10) }}
								activeOutlineColor={COLORS.primary}
								{...props}
								style={{
									textAlign: 'center',
									height: verticalScale(30),
									backgroundColor: '#fff',
								}} // Add padding to make space for the toggle button
							/>
						</View>
					</>
				)}
			/>
		</>
	);
};

export default VerficationInputComponent;
