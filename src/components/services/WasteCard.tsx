import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { COLORS } from '@/constants/Colors';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';

type NewsData = {
	id: number;
	day: string;
	startTime: string;
	endTime: string;
	type: string;
};

interface CardProps {
	data: NewsData;
}

const WasteCard: React.FC<CardProps> = ({ data }) => {
	const { t } = useTranslation();
	return (
		<View style={styles.cardContainer}>
			<View style={styles.textContainer}>
				<View style={styles.iconDayContainer}>
					<MaterialCommunityIcons
						name='fire-truck'
						size={24}
						color={COLORS.secondary}
					/>
					<Text style={styles.dayText}>{data.day}</Text>
				</View>

				<Text style={styles.columnText}>{t('from')}</Text>
				<Text style={styles.columnText}>{t('to')}</Text>
			</View>

			<View style={styles.dataContainer}>
				<View style={styles.iconDayContainer}></View>
				<Text style={[styles.columnText, { color: COLORS.primary }]}>
					{data.startTime}
				</Text>
				<Text style={[styles.columnText, { color: COLORS.primary }]}>
					{data.endTime}
				</Text>
			</View>
		</View>
	);
};

export default WasteCard;

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
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: verticalScale(10),
		paddingHorizontal: scale(10),
		backgroundColor: '#F3F3F3',
	},
	dataContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: scale(10),
	},
	iconDayContainer: {
		flex: 1, // Allocate more space for the day text
		flexDirection: 'row',
		alignItems: 'center',
	},
	dayText: {
		marginLeft: scale(5),
		color: COLORS.secondary,
		fontSize: moderateScale(16),
		flexShrink: 1, // Allow text to shrink if necessary
	},
	columnText: {
		flex: 1,
		textAlign: 'center',
		color: COLORS.secondary,
		fontSize: moderateScale(16),
	},
});
