import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { scale, verticalScale } from 'react-native-size-matters';

const DepartmentCard = ({
	departmentName,
	onSeeDetails,
	imageUrl,
}: {
	departmentName: string;
	onSeeDetails: () => void;
	imageUrl: string;
}) => {
	return (
		<TouchableOpacity onPress={onSeeDetails}>
			<View style={styles.cardContianer}>
				<View style={styles.iconContainer}>
					<Image source={{ uri: imageUrl }} style={styles.carIcon} />
				</View>

				<View style={styles.detailsContainer}>
					<Text style={styles.departmentName}>{departmentName}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	cardContianer: {
		flexDirection: 'row',
		backgroundColor: '#FFFFFF',
		margin: scale(10),
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
	departmentName: {
		fontWeight: 'bold',
		fontSize: scale(14),
		alignSelf: 'center',
		marginLeft: scale(-50),
	},
});

export default DepartmentCard;
