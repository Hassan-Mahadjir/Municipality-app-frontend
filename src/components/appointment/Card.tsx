import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { COLORS } from '@/constants/Colors';
import { router } from 'expo-router';
import { userAppointmentValues } from '@/types/appointment.type';
import { useTranslation } from 'react-i18next';

interface CardProps {
	data: userAppointmentValues;
}

const Card: React.FC<CardProps> = ({ data }) => {
	const { i18n, t } = useTranslation();
	const lang = i18n.language.toUpperCase();

	return (
		<View style={styles.cardContainer}>
			<Text style={styles.id}>ID: {data.id}</Text>

			<View style={styles.textContainer}>
				<Text style={styles.columnText}>{t('time')}</Text>
				<Text style={styles.columnText}>{t('date')}</Text>
				<Text style={[styles.columnText]}>{t('with')}</Text>
				<Text style={styles.columnText}>{t('status')}</Text>
			</View>

			<View style={styles.dataContainer}>
				<Text style={[styles.columnText, { color: '#000' }]}>
					{data.startTime}
				</Text>
				<Text style={[styles.columnText, { color: '#000' }]}>
					{data.day.date}
				</Text>
				<Text style={[styles.columnText, { color: '#000' }]}>
					{data.appointmentWith}
				</Text>
				<Text style={[styles.columnText, { color: '#000' }]}>
					{data.language === lang
						? data.status
						: data.translations.find(
								(tanslation) => tanslation.language === lang
						  )?.status || data.status}
				</Text>
			</View>
		</View>
	);
};

export default Card;

const styles = StyleSheet.create({
	cardContainer: {
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
	textContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: verticalScale(10),
		paddingHorizontal: scale(10),
		backgroundColor: '#F3F3F3',
	},
	dataContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: scale(10),
	},
	columnText: {
		flex: 1, // Ensure equal width for each column
		textAlign: 'center',
		color: COLORS.primary,
	},
	id: {
		fontSize: moderateScale(18),
		color: COLORS.secondary,
		fontWeight: '700',
	},
});
