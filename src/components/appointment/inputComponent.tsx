import React, { useState, RefObject, forwardRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Text, View, TextInput, TextInputProps } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import useBorderColor from '@/hooks/user-border-color';
import { useTranslation } from 'react-i18next';

type CustomInputProps = TextInputProps & {
	name: string;
	text: string;
	inputType?:
		| 'text'
		| 'report'
		| 'purpose'
		| 'message'
		| 'subject'
		| 'location'
		| 'comment'
		| 'title'
		| 'description'
		| 'contactInfo';
	rules?: any;
	returnKeyType?: TextInputProps['returnKeyType'];
	onSubmitEditing?: () => void;
	ref?: RefObject<TextInput>;
	width?: number | string; // Width prop
	height?: number | string; // Height prop
	multiline?: boolean; // Allow multiline input
	numberOfLines?: number; // Number of lines for multiline input
};

const InputComponent = forwardRef<TextInput, CustomInputProps>(
	(
		{
			name,
			rules,
			text,
			inputType,
			onSubmitEditing,
			returnKeyType,
			width = '100%',
			height = verticalScale(35), // Default height
			multiline = false, // Default to single line input
			numberOfLines = 1, // Default number of lines
			...props
		},
		ref
	) => {
		const { t } = useTranslation();
		const { control } = useFormContext();
		const { handleOnBlur, handleOnFocus, isOnFocus, borderColor } =
			useBorderColor();

		const getPlaceholder = () => {
			switch (inputType) {
				case 'report':
					return t('enterReport');
				case 'purpose':
					return t('enterpurpose');
				case 'message':
					return t('enterMessage');
				case 'subject':
					return t('enterSubject');
				case 'location':
					return t('enterLocation');
				case 'comment':
					return t('enterComment');
				case 'title':
					return t('enterTitle');
				case 'description':
					return t('enterDescription');
				case 'contactInfo':
					return t('enterContactInfo');
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
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<View
							style={{
								position: 'relative',
								width: width, // Use passed width
								paddingBottom: verticalScale(5),
							}}
						>
							<TextInput
								value={value}
								onChangeText={onChange}
								onBlur={handleOnBlur}
								onFocus={handleOnFocus}
								placeholder={getPlaceholder()}
								returnKeyType={returnKeyType}
								multiline={multiline} // Enable multiline input
								numberOfLines={numberOfLines} // Set number of lines
								style={{
									height: height, // Use passed height
									backgroundColor: '#fff',
									borderColor: borderColor,
									borderRadius: scale(10),
									paddingHorizontal: scale(10),
									paddingVertical: verticalScale(5),
									borderWidth: isOnFocus ? 2 : 1,
									fontSize: moderateScale(13),
									color: '#000',
									textAlignVertical: 'top',
									textAlign: 'justify',
								}}
								ref={ref}
								onSubmitEditing={onSubmitEditing}
								{...props}
							/>
							{error && (
								<Text style={{ color: 'red', fontSize: moderateScale(12) }}>
									{error.message}
								</Text>
							)}
						</View>
					)}
				/>
			</>
		);
	}
);

InputComponent.displayName = 'InputComponent';

export default InputComponent;
