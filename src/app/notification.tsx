import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import notifications from '../assets/data/notifications.json';
import { COLORS } from '@/constants/Colors';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { getNotifications } from '@/services/api/notifications';
import { useProfile } from '@/services/api/profile';
import { useTranslation } from 'react-i18next';
import { verticalScale } from 'react-native-size-matters';

export default function notification() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();
	const { profileData } = useProfile();
	const userId = profileData?.data.data.user.id;

	const { notificationsData, isPending, isFetching } = getNotifications(
		userId ? userId : 0
	);
	const notifications = notificationsData?.data.data;

	return (
		<View style={style.notificationContainer}>
			<Stack.Screen
				options={{
					headerShown: true,
					title: t('notifications'),
					headerTintColor: '#fff',
					headerStyle: { backgroundColor: COLORS.secondary },
					headerTitleAlign: 'center',
				}}
			/>
			<FlatList
				data={notifications}
				contentContainerStyle={{ gap: 10 }}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item, index }) => (
					<View style={style.notificationSubContainer}>
						<Text style={{ fontSize: 16, marginBottom: 5 }}>
							{item.language === lang
								? item.body
								: item.translations.find(
										(translation) => translation.language === lang
								  )?.body || item.body}
						</Text>
						<Text style={{ marginTop: verticalScale(5) }}>
							{item.sendAt.split('T')[0]}
						</Text>
					</View>
				)}
			/>
		</View>
	);
}

const style = StyleSheet.create({
	notificationContainer: {
		margin: 10,
		marginVertical: 10,
	},
	notificationSubContainer: {
		backgroundColor: '#fff',
		borderRadius: 10,
		padding: 10,
	},
});
