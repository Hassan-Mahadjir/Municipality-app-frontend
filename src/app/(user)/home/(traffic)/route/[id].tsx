import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { scale, verticalScale } from 'react-native-size-matters';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { COLORS } from '@/constants/Colors';

const stations = [
	{ id: 1, name: 'EMU Station', time: 20 },
	{ id: 2, name: 'Main Station', time: 15 },
	{ id: 3, name: 'Last Station', time: 0 }, // Example of the last station
];

const RouteDetails = () => {
	const { id } = useLocalSearchParams();

	return (
		<View>
			<Stack.Screen options={{ title: `Line ${id} Route & Stations` }} />

			{stations.map((station, index) => (
				<View key={station.id}>
					<View
						style={{
							margin: scale(10),
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<View style={styles.location}>
							<EvilIcons
								style={{ marginTop: verticalScale(12) }}
								name='location'
								size={36}
								color='#fff'
							/>
						</View>
						<Text>{station.name}</Text>
					</View>

					{/* Show the time and line only if it's not the last station */}
					{index !== stations.length - 1 && (
						<View style={[styles.timeContainer]}>
							<View style={styles.verticalLine}></View>
							<Text
								style={{ color: COLORS.primary }}
							>{`${station.time} mins`}</Text>
						</View>
					)}
				</View>
			))}
		</View>
	);
};

export default RouteDetails;

const styles = StyleSheet.create({
	location: {
		alignItems: 'center',
		backgroundColor: COLORS.secondary,
		width: scale(50),
		height: verticalScale(50),
		borderRadius: scale(15),
		marginRight: scale(10),
	},
	verticalLine: {
		height: verticalScale(50),
		width: scale(3),
		backgroundColor: '#000',
		marginRight: scale(15),
	},
	timeContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: '10%',
		marginBottom: verticalScale(5),
	},
});
