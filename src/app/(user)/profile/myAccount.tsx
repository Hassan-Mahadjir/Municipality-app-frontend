import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { COLORS } from '@/constants/Colors';
import CustomeProfileInput from '@/components/profile/CustomeProfileInput';
import { FormProvider, useForm } from 'react-hook-form';
import SubmitButtonComponent from '@/components/SubmitButton';
import { useProfile } from '@/services/api/profile';
import { ProfileValue } from '@/types/profile.type';
import { LoginFormValues } from '@/types/login.type';
import PhoneInput from 'react-native-international-phone-number';
import PhoneInputComponent from '@/components/PhoneInput';

const userProfile = () => {
	const { profileData } = useProfile();
	console.log(profileData?.data.data.avatar);
	const information = profileData?.data.data;

	const firstName = information?.firstName;
	const lastName = information?.lastName || '';
	const fullName = `${firstName} ${lastName}`;
	const avatar =
		information?.avatar ||
		'https://cdn.pixabay.com/photo/2021/02/27/16/25/woman-6055084_1280.jpg';

	const email = information?.user.email;
	const phone = information?.phone;
	const gender = information?.gender;
	const dateofBirth = information?.dateofBirth;
	const address = information?.address;
	const description = information?.description;

	console.log(email);

	const onSubmit = (data: ProfileValue<LoginFormValues>) => {
		// console.log('login form: ', data);
	};
	const methods = useForm<ProfileValue<LoginFormValues>>({
		defaultValues: {},
	});

	return (
		<View style={{ flex: 1 }}>
			<Stack.Screen options={{ title: 'Account Information' }} />

			<View
				style={{
					alignSelf: 'center',
					alignItems: 'center',
					marginTop: verticalScale(5),
				}}
			>
				<Image
					source={{
						uri: avatar,
					}}
					style={styles.profileImage}
				/>
				<Text style={styles.profileName}>{fullName}</Text>
			</View>

			{/* Field to be modified */}
			<ScrollView style={styles.scrollContainer}>
				<FormProvider {...methods}>
					<CustomeProfileInput
						name='firstName'
						text='First Name'
						inputType='firstName'
						defaultValue={firstName}
					/>
					<CustomeProfileInput
						name='lastName'
						text='Last Name'
						inputType='lastName'
						defaultValue={lastName}
					/>

					<CustomeProfileInput
						name='emailaddress'
						text='email'
						inputType='email'
						defaultValue={email}
					/>
					<PhoneInputComponent />

					<CustomeProfileInput
						name='gender'
						text='gender'
						inputType='gender'
						defaultValue={gender}
					/>

					<CustomeProfileInput
						name='dateofBirth'
						text='Date of Birth'
						inputType='dateofBirth'
						defaultValue={dateofBirth}
					/>

					<CustomeProfileInput
						name='address'
						text='Address'
						inputType='address'
						defaultValue={address}
					/>

					<CustomeProfileInput
						name='description'
						text='Description'
						inputType='description'
						defaultValue={description}
					/>

					<SubmitButtonComponent
						style={{ marginTop: verticalScale(10) }}
						title='Update profile'
						onPress={methods.handleSubmit(onSubmit)}
						fullWidth
					/>
				</FormProvider>
			</ScrollView>
		</View>
	);
};

export default userProfile;

const styles = StyleSheet.create({
	profileImage: {
		borderWidth: moderateScale(3),
		borderColor: '#fff',
		borderRadius: moderateScale(70),
		width: scale(80),
		height: verticalScale(80),
	},
	profileName: {
		color: COLORS.primary,
		fontWeight: '700',
		fontSize: moderateScale(20),
	},
	scrollContainer: {
		marginHorizontal: scale(10),
		marginBottom: verticalScale(10),
	},
});
