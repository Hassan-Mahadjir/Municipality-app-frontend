import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { COLORS } from '@/constants/Colors';
import { useTranslation } from 'react-i18next';

const GatherPointCard = ({
	location,
	capacity,
	pointNumber,
}: {
	location: string;
	capacity: number;
	pointNumber: number;
}) => {
	const { t } = useTranslation();

	return (
		<View style={styles.cardContianer}>
			<View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
				<FontAwesome6 name='arrows-down-to-people' size={24} color='black' />
				<Text style={styles.name}>
					{t('disasterPoint')} {pointNumber}
				</Text>
			</View>

			<View style={{ margin: scale(8) }}>
				<Text style={styles.locationCapacity}>
					Location: <Text style={{ color: '#000' }}>{location}</Text>
				</Text>
				<Text style={styles.locationCapacity}>
					Capacity: <Text style={{ color: '#000' }}>{capacity}</Text>
				</Text>
			</View>
		</View>
	);
};

export default GatherPointCard;

const styles = StyleSheet.create({
	cardContianer: {
		backgroundColor: '#FFFFFF',
		padding: scale(7),
		marginVertical: verticalScale(6),
		borderRadius: scale(10),
		justifyContent: 'flex-start',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: verticalScale(2) },
		shadowOpacity: 0.1,
		shadowRadius: scale(4),
		elevation: 2,
	},
	name: {
		fontSize: moderateScale(18),
		color: COLORS.secondary,
		fontWeight: '600',
	},
	locationCapacity: {
		color: COLORS.primary,
		marginBottom: verticalScale(5),
		fontSize: moderateScale(14),
	},
});
