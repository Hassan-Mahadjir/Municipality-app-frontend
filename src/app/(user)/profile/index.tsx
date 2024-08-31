import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';
import { removeItem } from '@/utils/storage';
import { router } from 'expo-router';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { COLORS } from '@/constants/Colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { styles } from '@/styles/settings.profile';
import { useProfile } from '@/services/api/profile';

export default function userProfileIndex() {
	const { profileData } = useProfile();
	const firstName = profileData?.data.data.firstName;
	const lastName = profileData?.data.data.lastName || '';
	const fullName = `${firstName} ${lastName}`;
	const avatar = profileData?.data.data.avatar;

	return (
		<View>
			<View style={styles.headerContainer}>
				<View style={styles.logoutContainer}>
					<Text style={styles.logoutText}>Logout</Text>
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
					<Image
						source={{
							uri: avatar,
						}}
						style={styles.profileImage}
					/>
					<Text style={styles.profileName}>{fullName}</Text>
				</View>
			</View>

			{/* MY ACCOUNT COMPONENT */}
			<View
				style={{ marginTop: verticalScale(10), marginHorizontal: scale(10) }}
			>
				<View style={styles.settingsCard}>
					<MaterialCommunityIcons
						name='account-circle-outline'
						size={34}
						color={COLORS.secondary}
					/>
					<View style={styles.settingsText}>
						<Text style={styles.settingsTitleText}>My Account</Text>
						<Text style={{ color: COLORS.gray }}>
							Make changes to your account
						</Text>
					</View>
					<Pressable
						onPress={() =>
							router.push({
								pathname: './profile/myAccount',
							})
						}
					>
						<AntDesign name='arrowright' size={28} color={COLORS.gray} />
					</Pressable>
				</View>
			</View>

			{/* Language COMPONENT */}
			<View
				style={{ marginTop: verticalScale(10), marginHorizontal: scale(10) }}
			>
				<View style={styles.settingsCard}>
					<FontAwesome name='language' size={34} color={COLORS.secondary} />
					<View style={styles.settingsText}>
						<Text style={styles.settingsTitleText}>Language</Text>
						<Text style={{ color: COLORS.gray }}>
							Change the language of the app
						</Text>
					</View>
					<Pressable>
						<AntDesign name='arrowright' size={28} color={COLORS.gray} />
					</Pressable>
				</View>
			</View>

			{/* Password COMPONENT */}
			<View
				style={{ marginTop: verticalScale(10), marginHorizontal: scale(10) }}
			>
				<View style={styles.settingsCard}>
					<MaterialIcons name='password' size={34} color={COLORS.secondary} />
					<View style={styles.settingsText}>
						<Text style={styles.settingsTitleText}>Password</Text>
						<Text style={{ color: COLORS.gray }}>Change your password</Text>
					</View>
					<Pressable>
						<AntDesign name='arrowright' size={28} color={COLORS.gray} />
					</Pressable>
				</View>
			</View>
		</View>
	);
}
