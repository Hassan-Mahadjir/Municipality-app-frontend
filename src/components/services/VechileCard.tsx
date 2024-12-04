import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { scale, verticalScale } from 'react-native-size-matters';
import { t } from 'i18next';

const VechileCard = ({
	keyDescription,
	plateno,
	onSeeDetails,
	imageUri,
	date,
}: {
	keyDescription: string;
	plateno: string;
	onSeeDetails: () => void;
	imageUri: string;
	date: string;
}) => {
	const collecteddate=t('collecteddate')
	return (
		<TouchableOpacity onPress={onSeeDetails}>
			<View style={styles.cardContianer}>
				<View style={styles.iconContainer}>
					<Image source={{ uri: imageUri }} style={styles.carIcon} />
				</View>

				<View style={styles.detailsContainer}>
					<Text style={styles.keydiscripiton}>{keyDescription}</Text>
					<Text style={styles.plateNumber}>{plateno}</Text>

					<Text>
						{collecteddate} <Text style={styles.date}>{date}</Text>
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	cardContianer: {
		flexDirection: 'row',
		backgroundColor: '#FFFFFF',
		padding: scale(7), // Reduced padding
		marginVertical: verticalScale(6), // Reduced vertical margin
		borderRadius: scale(10), // Reduced border radius
		alignItems: 'center',
		justifyContent: 'flex-start',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: verticalScale(2) },
		shadowOpacity: 0.1,
		shadowRadius: scale(4), // Reduced shadow radius
		elevation: 2, // Reduced elevation
	},
	iconContainer: {
		marginRight: scale(8), // Reduced margin
		paddingRight: scale(5), // Reduced padding
	},
	carIcon: {
		width: scale(80), // Reduced width
		height: verticalScale(72), // Reduced height
		borderRadius: scale(10),
		resizeMode: 'cover',
	},
	detailsContainer: {
		flex: 1,
	},
	keydiscripiton: {
		fontWeight: 'bold',
		fontSize: scale(14), // Reduced font size
	},
	plateNumber: {
		fontSize: scale(14),
		color: COLORS.primary,
	},
	healthLocation: {
		color: COLORS.gray,
		marginVertical: verticalScale(4), // Reduced vertical margin
	},
	date: {
		color: COLORS.primary,
	},
});

export default VechileCard;
