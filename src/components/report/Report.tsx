import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	FlatList,
	ScrollView,
	Alert,
	Platform,
} from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import SubmitButtonComponent from '../SubmitButton';
import InputComponent from '../appointment/inputComponent';
import * as ImagePicker from 'expo-image-picker';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import DropdownComponent from './DropDownComponent';
import { useDepartment } from '@/services/api/municipality';
import { DepartmentValues } from '@/types/munitipality.type';
import { useTranslation } from 'react-i18next';
import { categoryValues, postReportValues } from '@/types/report.type';
import * as Location from 'expo-location';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import firebaseConfig from '@/providers/firebase-config'; // Your Firebase config
import { postReport, useCategory } from '@/services/api/report';
import { useProfile } from '@/services/api/profile';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

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

const Report = () => {
	const auth = getAuth(app);

	if (!auth) {
		console.log('User is not authenticated');
	} else {
		console.log('User is authenticated');
	}

	// Translation and language setup
	const { t, i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();

	// Fetch department data
	const { departmentData } = useDepartment();
	const departments: DepartmentValues[] = departmentData?.data.data || [];

	const { categoriesData } = useCategory();
	const categories: categoryValues[] = categoriesData?.data.data || [];

	// get userId
	const { profileData } = useProfile();
	const userId = profileData?.data.data.user.id;
	// muntate report
	const { mutateReport, isPending } = postReport(userId ? +userId : 0);

	// Format departments for dropdown
	const formattedDepartments = departments.map((department) => ({
		label:
			department.language === lang
				? department.name
				: department.translations.find(
						(translation) => translation.language === lang
				  )?.name || department.name,
		value:
			department.language === lang
				? department.name
				: department.translations.find(
						(translation) => translation.language === lang
				  )?.name || department.name,
	}));

	// Format categories for dropdown
	const formattedCategories = categories.map((category) => ({
		label:
			category.language === lang
				? category.name
				: category.translations.find(
						(translation) => translation.language === lang
				  )?.name || category.name,
		value:
			category.language === lang
				? category.name
				: category.translations.find(
						(translation) => translation.language === lang
				  )?.name || category.name,
	}));

	const [selectedDepartmentValue, setSelectedDepartmentValue] = useState<
		string | null
	>(null);
	const [selectedCategoryValue, setSelectedCategoryValue] = useState<
		string | null
	>(null);
	const [location, setLocation] = useState<Location.LocationObject | null>(
		null
	);
	const [errorMsg, setErrorMsg] = useState<string | null>(null);
	const [images, setImages] = useState<string[]>([]);

	const [cameraPermission, setCameraPermission] = useState<boolean | null>(
		null
	);
	const [mediaLibraryPermission, setMediaLibraryPermission] = useState<
		boolean | null
	>(null);

	// Request location permission and fetch current location
	const getCurrentLocation = async () => {
		const { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== 'granted') {
			setErrorMsg('Permission to access location was denied');
			return;
		}
		const loc = await Location.getCurrentPositionAsync({});
		setLocation(loc);
	};

	useEffect(() => {
		(async () => {
			const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
			setCameraPermission(cameraStatus.status === 'granted');
			const mediaLibraryStatus =
				await ImagePicker.requestMediaLibraryPermissionsAsync();
			setMediaLibraryPermission(mediaLibraryStatus.status === 'granted');
		})();
		getCurrentLocation();
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

	const methods = useForm<postReportValues>({});
	const onSubmit = async (inputData: postReportValues) => {
		const uploadedImageUrls = await Promise.all(
			images.map(uploadImageToFirebase)
		);
		const validImageUrls = uploadedImageUrls.filter((url) => url !== null);

		const reportData: postReportValues = {
			message: inputData.message,
			subject: selectedCategoryValue ? selectedCategoryValue : '',
			departmentName: selectedDepartmentValue ? selectedDepartmentValue : '',
			language: lang,
			latitude: location?.coords.latitude,
			longitude: location?.coords.longitude,
			imageUrls: validImageUrls,
		};
		if (reportData) {
			mutateReport(reportData);
		}

		console.log(reportData);
	};

	return (
		<ScrollView style={{ margin: scale(10) }}>
			<Text style={{ fontSize: 18, marginBottom: scale(5) }}>
				{t('department')}
			</Text>
			<DropdownComponent
				data={formattedDepartments}
				value={selectedDepartmentValue}
				onChange={(value) => setSelectedDepartmentValue(value)}
				placeholder={t('chooseDepartment')}
				searchPlaceholder={t('searchDepartment')}
			/>
			<Text style={{ fontSize: 18, marginBottom: scale(5) }}>
				{t('category')}
			</Text>
			<DropdownComponent
				data={formattedCategories}
				value={selectedCategoryValue}
				onChange={(value) => setSelectedCategoryValue(value)}
				placeholder={t('chooseCategory')}
				searchPlaceholder={t('searchCategory')}
			/>
			<FormProvider {...methods}>
				<InputComponent
					name='message'
					text={t('message')}
					multiline={true}
					numberOfLines={4}
					height={100}
					inputType='message'
					returnKeyType='done'
				/>
				{/* Image Upload Section */}
				<View style={styles.imageUploadSection}>
					<Text style={styles.imageUploadLabel}>{t('uploadImages')}</Text>
					<View style={styles.imagePicker}>
						<TouchableOpacity onPress={pickImage}>
							<MaterialIcons name='add-a-photo' size={24} color='black' />
						</TouchableOpacity>
					</View>
					{/* Display Selected Images */}
					{images.length > 0 && (
						<FlatList
							data={images}
							horizontal
							keyExtractor={(uri) => uri}
							renderItem={({ item }) => (
								<View style={styles.imagePreview}>
									<Image
										source={{ uri: item }}
										style={styles.selectedImage}
										resizeMode='contain'
									/>
									<TouchableOpacity
										style={styles.deleteButton}
										onPress={() => deleteImage(item)}
									>
										<MaterialIcons name='delete' size={24} color='red' />
									</TouchableOpacity>
								</View>
							)}
							contentContainerStyle={{ paddingHorizontal: scale(10) }}
						/>
					)}
				</View>
				<SubmitButtonComponent
					style={{ marginTop: verticalScale(10) }}
					title='Submit Report'
					fullWidth
					onPress={methods.handleSubmit(onSubmit)}
				/>
			</FormProvider>
		</ScrollView>
	);
};

export default Report;

const styles = StyleSheet.create({
	imageUploadSection: {
		marginTop: verticalScale(15),
		backgroundColor: '#fff',
		borderColor: '#aaa',
		borderRadius: scale(8),
		padding: moderateScale(15),
		borderWidth: 1,
	},
	imageUploadLabel: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: verticalScale(10),
	},
	imagePicker: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: verticalScale(10),
	},
	imagePreview: {
		position: 'relative',
		marginRight: scale(10),
	},
	selectedImage: {
		width: scale(100),
		height: verticalScale(100),
		borderRadius: scale(8),
	},
	deleteButton: {
		position: 'absolute',
		top: 0,
		right: 0,
		backgroundColor: 'rgba(255, 0, 0, 0.5)',
		borderRadius: scale(10),
		padding: scale(5),
	},
});
