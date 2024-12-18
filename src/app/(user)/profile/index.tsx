import {
	View,
	Text,
	StyleSheet,
	Pressable,
	Image,
	ScrollView,
} from 'react-native';
import React from 'react';
import { removeItem, setItem } from '@/utils/storage';
import { router } from 'expo-router';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { COLORS } from '@/constants/Colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { styles } from '@/styles/settings.profile';
import { useProfile } from '@/services/api/profile';
import RandomColoredBackground from '@/components/profile/RandomColoredBackground';
import LanguagePicker from '@/components/profile/LanguagePicker';
import { useState } from 'react';
import { generateRandomAvatarUrl } from '@/utils/generateAvatar';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

export default function userProfileIndex() {
	const { t } = useTranslation();
	const { profileData } = useProfile();
	const firstName = profileData?.data.data.firstName;
	const lastName = profileData?.data.data.lastName || '';
	const fullName = `${firstName} ${lastName}`;
	let avatar = profileData?.data.data.avatar;
	const [isPickerVisible, setIsPickerVisible] = useState<boolean>(false);

	if (avatar === 'null') {
		avatar = generateRandomAvatarUrl();
		console.log(avatar);
	}

	return (
		<ScrollView>
			<View style={styles.headerContainer}>
				<View style={styles.logoutContainer}>
					<Text style={styles.logoutText}>{t('logout')}</Text>
					<Pressable
						onPress={() => {
							removeItem('token');
							router.replace('/(auth)');
						}}
					>
						<MaterialIcons name='logout' size={24} color='#fff' />
					</Pressable>
				</View>

				<View style={{ alignSelf: 'center', alignItems: 'center' }}>
					{avatar ? (
						<Image source={{ uri: avatar }} style={styles.profileImage} />
					) : (
						<RandomColoredBackground name={fullName} />
					)}
					<Text style={styles.profileName}>{fullName}</Text>
				</View>
			</View>

			{/* MY ACCOUNT COMPONENT */}
			<View
				style={{ marginTop: verticalScale(10), marginHorizontal: scale(10) }}
			>
				<Pressable onPress={() => router.push('/(user)/profile/account')}>
					<View style={styles.settingsCard}>
						<MaterialCommunityIcons
							name='account-circle-outline'
							size={34}
							color={COLORS.secondary}
						/>
						<View style={styles.settingsText}>
							<Text style={styles.settingsTitleText}>{t('myacc')}</Text>
							<Text style={{ color: COLORS.gray }}>{t('changestoacc')}</Text>
						</View>

						<AntDesign name='arrowright' size={28} color={COLORS.gray} />
					</View>
				</Pressable>
			</View>

			{/* Language COMPONENT */}
			<View
				style={{ marginTop: verticalScale(10), marginHorizontal: scale(10) }}
			>
				<Pressable onPress={() => setIsPickerVisible(true)}>
					<View style={styles.settingsCard}>
						<FontAwesome name='language' size={34} color={COLORS.secondary} />
						<View style={styles.settingsText}>
							<Text style={styles.settingsTitleText}>{t('langs')}</Text>
							<Text style={{ color: COLORS.gray }}>{t('changelang')}</Text>
						</View>

						<AntDesign name='arrowright' size={28} color={COLORS.gray} />

						<LanguagePicker
							visible={isPickerVisible}
							onClose={() => setIsPickerVisible(false)}
						/>
					</View>
				</Pressable>
			</View>

			{/* Password COMPONENT */}
			<View
				style={{ marginTop: verticalScale(10), marginHorizontal: scale(10) }}
			>
				<Pressable onPress={() => router.push('/(user)/profile/password')}>
					<View style={styles.settingsCard}>
						<MaterialIcons name='password' size={34} color={COLORS.secondary} />
						<View style={styles.settingsText}>
							<Text style={styles.settingsTitleText}>{t('pass')}</Text>
							<Text style={{ color: COLORS.gray }}>{t('changepass')}</Text>
						</View>

						<AntDesign name='arrowright' size={28} color={COLORS.gray} />
					</View>
				</Pressable>
			</View>
		</ScrollView>
	);
}
