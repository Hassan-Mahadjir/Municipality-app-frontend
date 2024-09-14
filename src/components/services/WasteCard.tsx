import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { COLORS } from '@/constants/Colors';
import { router } from 'expo-router';

type NewsData = {
	id: number;
	day: string;
	start: string;
	end: string;
};

interface CardProps {
	data: NewsData;
}

const WasteCard: React.FC<CardProps> = ({ data }) => {
	return (
		<View style={styles.cardContainer}>
			<View style={styles.textContainer}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<MaterialCommunityIcons
						name='fire-truck'
						size={24}
						color={COLORS.secondary}
					/>
					<Text
						style={{
							marginLeft: scale(5),
							color: COLORS.secondary,
							fontSize: moderateScale(16),
						}}
					>
						{data.day}
					</Text>
				</View>

				<Text
					style={[
						styles.columnText,
						{ marginHorizontal: scale(40), color: COLORS.primary },
					]}
				>
					From
				</Text>
				<Text style={[styles.columnText, { color: COLORS.primary }]}>To</Text>
			</View>

			<View style={styles.dataContainer}>
				<View style={styles.columnText}></View>
				<Text style={[styles.columnText, { marginHorizontal: scale(50) }]}>
					{data.start}
				</Text>
				<Text style={styles.columnText}>{data.end}</Text>
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
	},
});
