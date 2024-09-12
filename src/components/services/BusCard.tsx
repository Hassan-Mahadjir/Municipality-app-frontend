import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import { scale, verticalScale } from 'react-native-size-matters';
import { COLORS } from '@/constants/Colors';
import { router } from 'expo-router';

type NewsData = {
	id: number;
	line: string;
	day: string;
	time: string;
	from: string;
	to: string;
};

interface CardProps {
	data: NewsData;
}

const BusCard: React.FC<CardProps> = ({ data }) => {
	return (
		<View style={styles.cardContainer}>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<FontAwesome5 name='bus' size={24} color='black' />
					<Text style={{ marginLeft: scale(5) }}>Line {data.line}</Text>
				</View>
				<TouchableOpacity onPress={() => router.push(`./route/${data.id}`)}>
					<FontAwesome5
						name='arrow-circle-right'
						size={24}
						color={COLORS.secondary}
					/>
				</TouchableOpacity>
			</View>

			<View style={styles.textContainer}>
				<Text style={styles.columnText}>Time</Text>
				<Text style={[styles.columnText, { marginHorizontal: scale(80) }]}>
					From
				</Text>
				<Text style={styles.columnText}>To</Text>
			</View>

			<View style={styles.dataContainer}>
				<Text style={styles.columnText}>{data.time}</Text>
				<Text style={[styles.columnText, { marginHorizontal: scale(80) }]}>
					{data.from}
				</Text>
				<Text style={styles.columnText}>{data.to}</Text>
			</View>
		</View>
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
		flex: 1, // Ensure equal width for each column
		textAlign: 'center',
	},
});
