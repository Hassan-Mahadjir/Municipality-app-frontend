import { COLORS } from '@/constants/Colors';
import React, { useState, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import PhoneInput, { ICountry } from 'react-native-international-phone-number';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const PhoneInputComponent = () => {
	const { t } = useTranslation();
	const { control, setValue, watch } = useFormContext();

	const [selectedCountry, setSelectedCountry] = useState<null | ICountry>(null);
	const [borderColor, setBorderColor] = useState<string>('#848484');
	const [isOnFocus, setIsOnFocus] = useState<boolean>(false);
	const phone = watch('phone');

	useEffect(() => {
		if (selectedCountry && phone) {
			const callingCode = selectedCountry.callingCode || '';
			const combinedPhoneNumber = `${callingCode} ${phone}`;
			setValue('phoneNumber', combinedPhoneNumber);
		}
	}, [phone, selectedCountry, setValue]);

	const handleOnFocus = () => {
		setIsOnFocus(true);
		setBorderColor(COLORS.primary);
	};

	const handleOnBlur = () => {
		setIsOnFocus(false);
		setBorderColor(COLORS.gray);
	};

	const handleSelectedCountry = (country: ICountry) => {
		setSelectedCountry(country);
	};

	const handleInputValue = (phoneNumber: string) => {
		setValue('phone', phoneNumber);
	};

	return (
		<View
			style={{ marginTop: verticalScale(5), marginBottom: verticalScale(5) }}
		>
			<Text
				style={{
					fontSize: moderateScale(14),
					marginBottom: scale(4),
					color: COLORS.secondary,
				}}
			>
				phone nubmer
			</Text>
			<Controller
				name='phone'
				control={control}
				render={({ field: { value } }) => (
					<PhoneInput
						defaultCountry='TR'
						placeholder='(534) 543 54 53'
						value={value}
						onFocus={handleOnFocus}
						onBlur={handleOnBlur}
						onChangePhoneNumber={handleInputValue}
						selectedCountry={selectedCountry}
						onChangeSelectedCountry={handleSelectedCountry}
						phoneInputStyles={{
							container: {
								backgroundColor: '#fff',
								borderWidth: isOnFocus ? 2 : 1,
								borderStyle: 'solid',
								borderColor: borderColor,
								height: 45,
								borderRadius: 12,
							},
							flagContainer: {
								borderTopLeftRadius: 12,
								borderBottomLeftRadius: 12,
								backgroundColor: '#f9f9f9',
								justifyContent: 'center',
							},
							callingCode: {
								fontSize: 17,
								color: '#000',
								fontWeight: '600',
							},
							input: {
								fontSize: 17,
								color: '#000',
								fontWeight: '600',
							},
						}}
					/>
				)}
			/>
			{/* Hidden input to store the combined phone number */}
			<Controller
				name='phoneNumber'
				control={control}
				render={() => <></>} // This hides the field from the UI
			/>
		</View>
	);
};

export default PhoneInputComponent;
