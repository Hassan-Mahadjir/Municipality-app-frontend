import { Text, View, TextInput, TextInputProps } from 'react-native';
import { Controller, useFormContext } from 'react-hook-form';
import useBorderColor from '@/hooks/user-border-color';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import React from 'react';
import { COLORS } from '@/constants/Colors';

type ProfileInputProps = TextInputProps & {
	name: string;
	text: string;
	inputType?:
		| 'firstName'
		| 'lastName'
		| 'dataofbirth'
		| 'email'
		| 'gender'
		| 'dateofBirth'
		| 'address'
		| 'description';
	rules?: any;
};
const CustomeProfileInput = ({
	name,
	rules,
	text,
	inputType,
	...props
}: TextInputProps & ProfileInputProps) => {
	const { control } = useFormContext();
	const { handleOnBlur, handleOnFocus, isOnFocus, borderColor } =
		useBorderColor();

	return (
		<View>
			{text && (
				<Text
					style={{
						marginBottom: scale(4),
						fontSize: moderateScale(14),
						color: COLORS.secondary,
					}}
				>
					{text}
				</Text>
			)}
			<Controller
				control={control}
				name={name}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<View>
						<TextInput
							value={value}
							onChangeText={(val) => onChange(val)}
							onBlur={handleOnBlur}
							onFocus={handleOnFocus}
							style={{
								height: verticalScale(35),
								borderRadius: scale(10),
								borderColor: borderColor,
								borderWidth: isOnFocus ? 2 : 1,
								backgroundColor: '#fff',
								paddingHorizontal: scale(8),
								fontSize: moderateScale(13),
								marginBottom: verticalScale(3),
							}}
							{...props}
						/>
						{error && (
							<Text
								style={{ marginTop: scale(3), color: 'red', fontWeight: 700 }}
							>
								{error.message || 'Error'}
							</Text>
						)}
					</View>
				)}
			/>
		</View>
	);
};

export default CustomeProfileInput;
