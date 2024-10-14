import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
	Alert,
} from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { COLORS } from '@/constants/Colors';
import CustomeProfileInput from '@/components/profile/CustomeProfileInput';
import { FormProvider, useForm } from 'react-hook-form';
import SubmitButtonComponent from '@/components/SubmitButton';
import { useProfile } from '@/services/api/profile';
import { ProfileValue } from '@/types/profile.type';
import { LoginFormValues } from '@/types/login.type';
import PhoneInputComponent from '@/components/PhoneInput';
import { generateRandomAvatarUrl } from '@/utils/generateAvatar';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';
import RandomColoredBackground from '@/components/profile/RandomColoredBackground';

const UserProfile = () => {
    const [images, setImages] = useState<string[]>([]); // Use an array for multiple images

    const pickImage = async () => {
        // Request permissions for camera and media library
        const mediaStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
        const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();

        if (mediaStatus.status !== 'granted' || cameraStatus.status !== 'granted') {
            alert('Camera and media library permissions are required to use this feature.');
            return;
        }

        // Show options to the user
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

        let result;
        const imagePickerOptions: ImagePicker.ImagePickerOptions = {
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        };

        if (action === 'camera') {
            result = await ImagePicker.launchCameraAsync(imagePickerOptions);
        } else if (action === 'gallery') {
            result = await ImagePicker.launchImageLibraryAsync(imagePickerOptions);
        }

        if (result && !result.canceled) {
            const imageUri = result.assets[0].uri;
            console.log('Selected Image URI:', imageUri);
            setImages((prevImages) => [...prevImages, imageUri]); // Add new image to the array
        }
    };

    // Function to remove an image
    const removeImage = (uri: string) => {
        setImages((prevImages) => prevImages.filter((image) => image !== uri)); // Remove the image from the array
    };

    const { profileData } = useProfile();
    const information = profileData?.data.data;

    const firstName = information?.firstName;
    const lastName = information?.lastName || '';
    const fullName = `${firstName} ${lastName}`;
    const avatar = images.length > 0 ? images[0] : information?.avatar; // Use the first picked image if available

    const email = information?.user.email;
    const phone = information?.phone;
    const gender = information?.gender;
    const dateofBirth = information?.dateofBirth;
    const address = information?.address;
    const description = information?.description;

    const onSubmit = (data: ProfileValue<LoginFormValues>) => {
        // Handle form submission, including the new profile picture URL
        console.log('Profile form: ', { ...data, profileImages: images });
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
                        <MaterialIcons name="add-a-photo" size={24} color="black" />
                    </TouchableOpacity>

                    {/* Delete Image Button for each selected image */}
                    {images.map((imgUri, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.deleteButton}
                            onPress={() => removeImage(imgUri)} // Deletes the selected image
                        >
                            <MaterialIcons name="delete" size={24} color="red" />
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
                        name="firstName"
                        text="First Name"
                        inputType="firstName"
                        defaultValue={firstName}
                    />
                    <CustomeProfileInput
                        name="lastName"
                        text="Last Name"
                        inputType="lastName"
                        defaultValue={lastName}
                    />
                    <CustomeProfileInput
                        name="emailaddress"
                        text="Email"
                        inputType="email"
                        defaultValue={email}
                    />
                    <PhoneInputComponent />
                    <CustomeProfileInput
                        name="gender"
                        text="Gender"
                        inputType="gender"
                        defaultValue={gender}
                    />
                    <CustomeProfileInput
                        name="dateofBirth"
                        text="Date of Birth"
                        inputType="dateofBirth"
                        defaultValue={dateofBirth}
                    />
                    <CustomeProfileInput
                        name="address"
                        text="Address"
                        inputType="address"
                        defaultValue={address}
                    />
                    <CustomeProfileInput
                        name="description"
                        text="Description"
                        inputType="description"
                        defaultValue={description}
                    />
                    <SubmitButtonComponent
                        style={{ marginTop: verticalScale(10) }}
                        title="Update Profile"
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
