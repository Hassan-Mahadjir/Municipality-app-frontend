import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { router } from 'expo-router';
import { COLORS } from '@/constants/Colors';

type NewsData = {
	id: number;
	status: string;
	imageUrl: string;
	type: string;
};

interface CardProps {
	data: NewsData;
}

const AnimalCard: React.FC<CardProps> = ({ data }) => {
	return (
		<View
			style={{
				flex: 1,
				marginHorizontal: scale(5),
				// backgroundColor: '#fff',
			}}
		>
			<Image source={{ uri: data.imageUrl }} style={styles.pageImage} />
			<Text style={styles.numberText}>
				Animal Number: <Text style={{ fontWeight: 'bold' }}>{data.id}</Text>
			</Text>

			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
				<Text style={styles.numberText}>
					Status: <Text style={{ color: COLORS.primary }}>{data.status}</Text>
				</Text>
				<Text style={styles.numberText}>20 min</Text>
			</View>
		</View>
	);
};

export default AnimalCard;

export const styles = StyleSheet.create({
	pageImage: {
		height: verticalScale(100),
		width: '100%',
		borderRadius: scale(10),
	},
	imageText: {
		fontSize: moderateScale(12),
		color: COLORS.gray,
		textAlign: 'justify',
		marginTop: verticalScale(5),
	},
	numberText: {
		fontSize: moderateScale(14),
		textAlign: 'center',
		marginTop: verticalScale(5),
	},
});
