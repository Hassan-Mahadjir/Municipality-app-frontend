import {
	FlatList,
	StyleSheet,
	Text,
	View,
	Linking,
	TouchableOpacity,
	RefreshControl,
} from 'react-native';
import React, { useMemo } from 'react';
import { Stack } from 'expo-router';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Feather from '@expo/vector-icons/Feather';
import { COLORS } from '@/constants/Colors';
import { useTranslation } from 'react-i18next';
import { useEmergencyContact } from '@/services/api/community';
import Loading from '@/components/Loading';

const emergency = () => {
	const { t, i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();
	const { emergencyContactData, isFetching, refetch, isLoading } =
		useEmergencyContact();
	const contactInfo = emergencyContactData?.data.data || [];

	// Pull-to-refresh handler
	const onRefresh = async () => {
		await refetch();
	};

	return (
		<View style={{ flex: 1 }}>
			<Stack.Screen options={{ title: t('emergencyContacts') }} />
			{isLoading ? (
				<Loading />
			) : (
				<FlatList
					data={contactInfo}
					style={{ marginTop: verticalScale(20) }}
					contentContainerStyle={{
						gap: scale(10),
						paddingBottom: verticalScale(100),
					}}
					showsVerticalScrollIndicator={false}
					refreshControl={
						<RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
					}
					renderItem={({ item }) => (
						<View style={styles.container}>
							<TouchableOpacity
								onPress={() => Linking.openURL(`tel:${item.phone}`)}
							>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
									}}
								>
									<Feather name='phone-call' size={24} color={COLORS.primary} />
									<Text style={styles.text}>
										{item.language === lang
											? item.name
											: item.translations.find(
													(translation) => translation.language === lang
											  )?.name || item.name}
									</Text>
									<Text style={styles.text}>{item.phone}</Text>
								</View>
							</TouchableOpacity>
						</View>
					)}
				/>
			)}
		</View>
	);
};

export default emergency;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		marginHorizontal: scale(10),
		padding: scale(7),
		borderRadius: scale(10),
		shadowColor: '#000',
		shadowOffset: { width: 0, height: verticalScale(2) },
		shadowOpacity: 0.1,
		shadowRadius: scale(4),
		elevation: 2,
	},
	text: {
		marginHorizontal: scale(10),
		fontSize: moderateScale(16),
		color: COLORS.secondary,
	},
});
