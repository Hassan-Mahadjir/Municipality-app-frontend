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
} from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import SubmitButtonComponent from '../SubmitButton';
import InputComponent from '../appointment/inputComponent';
import * as ImagePicker from 'expo-image-picker';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { appointment } from '@/types/appointmnet-report';

const Report = () => {
	// Form methods
	const methods = useForm<appointment>({
		defaultValues: {
			purpose: '',
		},
	});

	// State for the selected images URIs
	const [images, setImages] = useState<string[]>([]);

	// State to manage permissions
	const [cameraPermission, setCameraPermission] = useState<boolean | null>(null);
	const [mediaLibraryPermission, setMediaLibraryPermission] = useState<boolean | null>(null);

	// Request permission on component mount
	useEffect(() => {
		(async () => {
			const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
			setCameraPermission(cameraStatus.status === 'granted');

			const mediaLibraryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
			setMediaLibraryPermission(mediaLibraryStatus.status === 'granted');
		})();
	}, []);

	// Function to launch camera
	const launchCamera = async () => {
		if (!cameraPermission) {
			const { status } = await ImagePicker.requestCameraPermissionsAsync();
			if (status !== 'granted') {
				Alert.alert('Permission Required', 'Camera access is required to take photos.');
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

	// Function to launch image library
	const launchGallery = async () => {
		if (!mediaLibraryPermission) {
			const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
			if (status !== 'granted') {
				Alert.alert('Permission Required', 'Gallery access is required to select photos.');
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

	// Function to pick an image
	const pickImage = async () => {
		const options = ['Camera', 'Gallery', 'Cancel'];
		const action = await new Promise((resolve) =>
			Alert.alert(
				'Select Image Source',
				'Choose an image source',
				[
					{ text: 'Camera', onPress: () => resolve('camera') },
					{ text: 'Gallery', onPress: () => resolve('gallery') },
					{ text: 'Cancel', onPress: () => resolve(null), style: 'cancel' },
				],
				{ cancelable: true }
			)
		);

		if (action === 'camera') {
			launchCamera();
		} else if (action === 'gallery') {
			launchGallery();
		}
	};

	// Function to delete an image
	const deleteImage = (uri: string) => {
		setImages((prevImages) => prevImages.filter((image) => image !== uri));
	};

	return (
		<ScrollView style={{ margin: scale(10) }}>
			<FormProvider {...methods}>
				<InputComponent
					name="subject"
					text="Subject"
					multiline={true}
					numberOfLines={4}
					height={40}
					inputType="subject"
					returnKeyType="done"
				/>
				<InputComponent
					name="location"
					text="Location"
					multiline={true}
					numberOfLines={4}
					height={40}
					inputType="location"
					returnKeyType="done"
				/>
				<InputComponent
					name="message"
					text="Message"
					multiline={true}
					numberOfLines={4}
					height={100}
					inputType="message"
					returnKeyType="done"
				/>

				{/* Multiple Image Upload Section */}
				<View style={styles.imageUploadSection}>
					<Text style={styles.imageUploadLabel}>Upload Images (optional)</Text>
					<View style={styles.imagePicker}>
						<TouchableOpacity onPress={pickImage}>
							<MaterialIcons name="add-a-photo" size={24} color="black" />
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
										resizeMode="contain"
									/>
									{/* Delete Button */}
									<TouchableOpacity
										style={styles.deleteButton}
										onPress={() => deleteImage(item)}
									>
										<MaterialIcons name="delete" size={24} color="red" />
									</TouchableOpacity>
								</View>
							)}
							contentContainerStyle={{ paddingHorizontal: scale(10) }}
						/>
					)}
				</View>

				<SubmitButtonComponent
					style={{ marginTop: verticalScale(10) }}
					title="Submit Report"
					fullWidth
					onPress={() => {
						// Handle form submission and log the URIs of selected images
						console.log('Selected Image URIs:', images);
						methods.handleSubmit((data) => {
							console.log('Form Data:', { ...data, images });
						})();
					}}
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
        borderColor: '#aaa', // Static light gray border color
        borderRadius: scale(10),
        paddingHorizontal: scale(10),
        paddingVertical: verticalScale(5),
        borderWidth: 1, // Default border width
        // If you want to make the border dynamic based on some condition, use state or props here.
        // For example: borderWidth: isOnFocus ? 2 : 1, if you have an `isOnFocus` state available
        fontSize: moderateScale(13),
        color: '#000',
        textAlignVertical: 'top',
        textAlign: 'justify',
    },
	imageUploadLabel: {
		fontSize: 18,
		marginBottom: scale(5),
	},
	imagePicker: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: verticalScale(10),
	},
	uploadText: {
		marginLeft: scale(10),
		fontSize: 16,
	},
	imagePreview: {
		alignItems: 'center',
		marginRight: scale(10),
		position: 'relative',
	},
	selectedImage: {
		width: scale(100),
		height: verticalScale(100),
		borderRadius: scale(10),
	},
	deleteButton: {
		position: 'absolute',
		top: -5,
		right: -5,
		backgroundColor: '#fff',
		borderRadius: scale(12),
		padding: scale(2),
	},
});
