import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { COLORS } from '@/constants/Colors';
import CustomeProfileInput from '@/components/profile/CustomeProfileInput';
import { FormProvider, useForm } from 'react-hook-form';
import SubmitButtonComponent from '@/components/SubmitButton';
import { patchEmail, patchProfile, useProfile } from '@/services/api/profile';
import { patchProfileValue } from '@/types/profile.type';
import PhoneInputComponent from '@/components/PhoneInput';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';
import RandomColoredBackground from '@/components/profile/RandomColoredBackground';
import { useTranslation } from 'react-i18next';
import DateTimePicker from '@react-native-community/datetimepicker';
import { getItem, removeItem } from '@/utils/storage';
import * as Location from 'expo-location';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import firebaseConfig from '@/providers/firebase-config'; // Your Firebase config

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Uploading images function
const uploadImageToFirebase = async (uri: string) => {
	try {
		const filename = uri.substring(uri.lastIndexOf('/') + 1);
		const storageRef = ref(storage, `reports/${filename}`);
		const response = await fetch(uri);
		const blob = await response.blob();
		await uploadBytes(storageRef, blob);
		return await getDownloadURL(storageRef);
	} catch (error) {
		console.error('Image upload failed:', error);
		Alert.alert('Upload Error', 'Failed to upload the image.');
		return null;
	}
};

const UserProfile = () => {
	const auth = getAuth(app);

	if (!auth) {
		console.log('User is not authenticated');
	} else {
		console.log('User is authenticated');
	}

	const { t, i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();
	const [images, setImages] = useState<string[]>([]); // Use an array for multiple images

	// State for DateTimePicker
	const [showDatePicker, setShowDatePicker] = useState(false);
	const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);

	const [cameraPermission, setCameraPermission] = useState<boolean | null>(
		null
	);
	const [mediaLibraryPermission, setMediaLibraryPermission] = useState<
		boolean | null
	>(null);

	//
	useEffect(() => {
		(async () => {
			const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
			setCameraPermission(cameraStatus.status === 'granted');
			const mediaLibraryStatus =
				await ImagePicker.requestMediaLibraryPermissionsAsync();
			setMediaLibraryPermission(mediaLibraryStatus.status === 'granted');
		})();
	}, []);

	// Functions to launch camera and gallery
	const launchCamera = async () => {
		if (!cameraPermission) {
			const { status } = await ImagePicker.requestCameraPermissionsAsync();
			if (status !== 'granted') {
				Alert.alert(
					'Permission Required',
					'Camera access is required to take photos.'
				);
				return;
			}
		}
		const result = await ImagePicker.launchCameraAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		if (!result.canceled) {
			setImages((prevImages) => [...prevImages, result.assets[0].uri]);
		}
	};

	const launchGallery = async () => {
		if (!mediaLibraryPermission) {
			const { status } =
				await ImagePicker.requestMediaLibraryPermissionsAsync();
			if (status !== 'granted') {
				Alert.alert(
					'Permission Required',
					'Gallery access is required to select photos.'
				);
				return;
			}
		}
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsMultipleSelection: false,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		if (!result.canceled) {
			setImages((prevImages) => [...prevImages, result.assets[0].uri]);
		}
	};

	const pickImage = async () => {
		const action = await new Promise((resolve) =>
			Alert.alert('Select Image Source', 'Choose an image source', [
				{ text: 'Camera', onPress: () => resolve('camera') },
				{ text: 'Gallery', onPress: () => resolve('gallery') },
				{ text: 'Cancel', onPress: () => resolve(null), style: 'cancel' },
			])
		);

		if (action === 'camera') {
			launchCamera();
		} else if (action === 'gallery') {
			launchGallery();
		}
	};

	const deleteImage = (uri: string) => {
		setImages((prevImages) => prevImages.filter((image) => image !== uri));
	};

	const { profileData } = useProfile();
	const information = profileData?.data.data;

	const firstName = information?.firstName;
	const lastName = information?.lastName || '';
	const fullName = `${firstName} ${lastName}`;
	const avatar = images.length > 0 ? images[0] : information?.avatar; // Use the first picked image if available

	const email = information?.user.email;
	const phone = information?.phone;
	const gender =
		information?.language === lang
			? information.gender
			: information?.translation.gender;
	const dateofbirth = information?.dateofBirth
		? information?.dateofBirth.split('T')[0]
		: '';
	const address = information?.address;
	const description =
		information?.language === lang
			? information.description
			: information?.translation.description;
	const userId = information?.user.id;

	// Update calls
	const { mutateEmail } = patchEmail(userId ? userId : 0);
	const { mutateProfile } = patchProfile(userId ? userId : 0);

	const onSubmit = async (data: patchProfileValue) => {
		if (data.email !== email) {
			const emailAddress = data.email;

			await mutateEmail({ email: emailAddress ? emailAddress : '' });
		}

		const uploadedImageUrls = await Promise.all(
			images.map(uploadImageToFirebase)
		);
		const validImageUrls = uploadedImageUrls.filter((url) => url !== null);

		const phoneNumber = await getItem('phoneNumber');

		const profileData: patchProfileValue = {
			firstName: data.firstName || firstName,
			lastName: data.lastName || lastName,
			phone: `${phoneNumber}` || phone,
			avatar: validImageUrls[0] || avatar,
			gender: data.gender || gender,
			dateofBirth: data.dateofBirth || dateofbirth,
			description: data.description || description,
			language: lang,
			address: data.address || address,
		};
		// Handle form submission, including the new profile picture URL
		mutateProfile(profileData);
		console.log('Profile form: ', profileData);
		removeItem('phoneNumber');
	};

	// Handle DateTimePicker confirmation
	const handleDateChange = (event: any, selectedDate?: Date) => {
		setShowDatePicker(false);
		if (selectedDate) {
			setDateOfBirth(selectedDate);
			methods.setValue('dateofBirth', selectedDate.toISOString());
		}
	};

	const methods = useForm<patchProfileValue>({
		defaultValues: {
			firstName: firstName,
			lastName: lastName,
			phone: phone,
			email: email,
			gender: gender,
			dateofBirth: dateofbirth,
			address: address,
			description: description,
		},
	});

	return (
		<View style={{ flex: 1 }}>
			<Stack.Screen options={{ title: t('accountInfo') }} />

			<View
				style={{
					alignSelf: 'center',
					alignItems: 'center',
					marginTop: verticalScale(5),
				}}
			>
				<View>
					{avatar ? (
						<Image source={{ uri: avatar }} style={styles.profileImage} />
					) : (
						<RandomColoredBackground name={fullName} />
					)}
					{/* Image Selection Button */}
					<TouchableOpacity
						style={{
							position: 'absolute',
							right: 1,
						}}
						onPress={pickImage} // Opens image library or camera
					>
						<MaterialIcons name='add-a-photo' size={24} color='black' />
					</TouchableOpacity>

					{/* Delete Image Button for each selected image */}
					{images.map((imgUri, index) => (
						<TouchableOpacity
							key={index}
							style={styles.deleteButton}
							onPress={() => deleteImage(imgUri)} // Deletes the selected image
						>
							<MaterialIcons name='delete' size={24} color='red' />
						</TouchableOpacity>
					))}
				</View>
				<Text style={styles.profileName}>{fullName}</Text>
			</View>

			{/* Profile form */}
			<ScrollView
				style={styles.scrollContainer}
				showsVerticalScrollIndicator={false}
			>
				<FormProvider {...methods}>
					<CustomeProfileInput
						name='firstName'
						text={t('firstname')}
						inputType='firstName'
						defaultValue={firstName}
					/>
					<CustomeProfileInput
						name='lastName'
						text={t('lastname')}
						inputType='lastName'
						defaultValue={lastName}
					/>
					<CustomeProfileInput
						name='email'
						text={t('email')}
						inputType='email'
						defaultValue={email}
					/>
					<PhoneInputComponent />
					<CustomeProfileInput
						name='gender'
						text={t('gender')}
						inputType='gender'
						defaultValue={gender}
					/>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignContent: 'center',
						}}
					>
						<CustomeProfileInput
							name='dateofBirth'
							text={t('dob')}
							inputType='dateofBirth'
							defaultValue={dateofbirth}
							editable={false}
						/>

						<TouchableOpacity
							onPress={() => setShowDatePicker(true)}
							style={{
								marginTop: verticalScale(28),
								marginHorizontal: scale(10),
							}}
						>
							<Text>{t('changedob')}</Text>
						</TouchableOpacity>
						{showDatePicker && (
							<DateTimePicker
								value={dateOfBirth || new Date()}
								style={{ marginTop: verticalScale(20), marginLeft: scale(-15) }}
								mode='date'
								display='default'
								onChange={handleDateChange}
							/>
						)}
					</View>

					<CustomeProfileInput
						name='address'
						text={t('address')}
						inputType='address'
						defaultValue={address}
					/>
					<CustomeProfileInput
						name='description'
						text={t('description')}
						inputType='description'
						defaultValue={description}
					/>
					<SubmitButtonComponent
						style={{ marginTop: verticalScale(10) }}
						title={t('updateProfile')}
						onPress={methods.handleSubmit(onSubmit)}
						fullWidth
					/>
				</FormProvider>
			</ScrollView>
		</View>
	);
};

export default UserProfile;

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
		marginTop: verticalScale(8),
		fontSize: moderateScale(20),
	},
	scrollContainer: {
		marginHorizontal: scale(10),
		marginBottom: verticalScale(10),
	},
	deleteButton: {
		position: 'absolute',
		left: 1,
		bottom: 0,
		backgroundColor: 'transparent',
	},
});
