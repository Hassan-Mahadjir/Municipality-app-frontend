import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
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
import { generateRandomAvatarUrl } from '@/utils/generateAvatar';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

const imgDir = FileSystem.documentDirectory + 'images/';

const ensureDirExists = async () => {
	const dirInfo = await FileSystem.getInfoAsync(imgDir);
	if (!dirInfo.exists) {
		await FileSystem.makeDirectoryAsync(imgDir, { intermediates: true });
	}
};

const kullaniciProfili = () => {
	const [image, setImage] = useState<string | null>(null);

	const resimSec = async (kutuphaneKullan: boolean) => {
		let sonuc;

		const secenekler: ImagePicker.ImagePickerOptions = {
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		};

		if (kutuphaneKullan) {
			sonuc = await ImagePicker.launchImageLibraryAsync(secenekler);
		} else {
			await ImagePicker.requestCameraPermissionsAsync();

			sonuc = await ImagePicker.launchCameraAsync(secenekler);
		}

		console.log(sonuc);

		if (!sonuc.canceled) {
			setImage(sonuc.assets[0].uri);
		}
	};

	const { profileData } = useProfile();
	const bilgi = profileData?.data.data;

	const ad = bilgi?.firstName;
	const soyad = bilgi?.lastName || '';
	const tamAd = `${ad} ${soyad}`;
	const avatar = bilgi?.avatar || generateRandomAvatarUrl();

	const email = bilgi?.user.email;
	const telefon = bilgi?.phone;
	const cinsiyet = bilgi?.gender;
	const dogumTarihi = bilgi?.dateofBirth;
	const adres = bilgi?.address;
	const aciklama = bilgi?.description;

	const gonder = (data: ProfileValue<LoginFormValues>) => {
		// console.log('giriş formu: ', data);
	};
	const methods = useForm<ProfileValue<LoginFormValues>>({
		defaultValues: {},
	});

	return (
		<View style={{ flex: 1 }}>
			<Stack.Screen options={{ title: 'Hesap Bilgileri' }} />

			<View
				style={{
					alignSelf: 'center',
					alignItems: 'center',
					marginTop: verticalScale(5),
				}}
			>
				<View>
					<Image
						source={{
							uri: avatar,
						}}
						style={styles.profilResmi}
					/>
					<TouchableOpacity
						style={{
							position: 'absolute',
							right: 1,
						}}
						onPress={() => resimSec(true)}
					>
						<MaterialIcons name='add-a-photo' size={24} color='black' />
					</TouchableOpacity>
				</View>
				<Text style={styles.profilAdi}>{tamAd}</Text>
			</View>

			{/* Değiştirilecek Alanlar */}
			<ScrollView
				style={styles.scrollContainer}
				showsVerticalScrollIndicator={false}
			>
				<FormProvider {...methods}>
					<CustomeProfileInput
						name='ad'
						text='Ad'
						inputType='firstName'
						defaultValue={ad}
					/>
					<CustomeProfileInput
						name='soyad'
						text='Soyad'
						inputType='lastName'
						defaultValue={soyad}
					/>

					<CustomeProfileInput
						name='email'
						text='E-posta'
						inputType='email'
						defaultValue={email}
					/>
					<PhoneInputComponent />

					<CustomeProfileInput
						name='cinsiyet'
						text='Cinsiyet'
						inputType='gender'
						defaultValue={cinsiyet}
					/>

					<CustomeProfileInput
						name='dogumTarihi'
						text='Doğum Tarihi'
						inputType='dateofBirth'
						defaultValue={dogumTarihi}
					/>

					<CustomeProfileInput
						name='adres'
						text='Adres'
						inputType='address'
						defaultValue={adres}
					/>

					<CustomeProfileInput
						name='aciklama'
						text='Açıklama'
						inputType='description'
						defaultValue={aciklama}
					/>

					<SubmitButtonComponent
						style={{ marginTop: verticalScale(10) }}
						title='Profili Güncelle'
						onPress={methods.handleSubmit(gonder)}
						fullWidth
					/>
				</FormProvider>
			</ScrollView>
		</View>
	);
};

export default kullaniciProfili;

const styles = StyleSheet.create({
	profilResmi: {
		borderWidth: moderateScale(3),
		borderColor: '#fff',
		borderRadius: moderateScale(70),
		width: scale(80),
		height: verticalScale(80),
	},
	profilAdi: {
		color: COLORS.primary,
		fontWeight: '700',
		fontSize: moderateScale(20),
	},
	scrollContainer: {
		marginHorizontal: scale(10),
		marginBottom: verticalScale(10),
	},
});
