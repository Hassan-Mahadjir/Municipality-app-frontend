import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { scale, verticalScale } from 'react-native-size-matters';
import { COLORS } from '@/constants/Colors';
import { router } from 'expo-router';
import { BusValues } from '@/types/traffic.type';
import { useTranslation } from 'react-i18next';

type BusValue = {
	id: number;
	from: string;
	to: string;
	goTime: string;
	line: number;
};
interface CardProps {
	data: BusValue;
}

const BusCard: React.FC<CardProps> = ({ data }) => {
	const { t } = useTranslation();

	return (
		<TouchableOpacity
			onPress={() => router.push(`/(user)/home/(traffic)/line/${data.id}`)}
		>
			<View style={styles.cardContainer}>
				{/* Header with Line ID and Navigation */}
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<FontAwesome5 name='bus' size={24} color={COLORS.secondary} />
						<Text
							style={{
								marginLeft: scale(5),
								fontSize: scale(14),
								fontWeight: '600',
							}}
						>
							{t('line')} {data.line}
						</Text>
					</View>
				</View>

				{/* Column Headers */}
				<View style={styles.textContainer}>
					<Text style={styles.columnText}>{t('time')}</Text>
					<Text style={styles.columnText}>{t('from')}</Text>
					<Text style={styles.columnText}>{t('to')}</Text>
				</View>

				{/* Data Rows */}
				<View style={styles.dataContainer}>
					<Text style={styles.rowText}>{data.goTime}</Text>
					<Text style={styles.rowText}>{data.from}</Text>
					<Text style={styles.rowText}>{data.to}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default BusCard;

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
		flex: 1,
		textAlign: 'center',
		fontSize: scale(14),
		color: COLORS.secondary,
		fontWeight: '600',
	},
	rowText: {
		flex: 1,
		textAlign: 'center',
		fontSize: scale(14),
		color: 'black',
	},
});
