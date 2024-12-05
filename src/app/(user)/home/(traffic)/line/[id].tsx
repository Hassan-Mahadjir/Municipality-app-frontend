import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { scale, verticalScale } from 'react-native-size-matters';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { COLORS } from '@/constants/Colors';
import { useTranslation } from 'react-i18next';
import { useBus } from '@/services/api/traffic';

const RouteDetails = () => {
	const { id } = useLocalSearchParams();
	const { t } = useTranslation();

	const { busData, isLoading, isFetching } = useBus(+id);
	const stationsData = busData?.data.data.toStations || [];

	return (
		<View>
			<Stack.Screen
				options={{ title: `${t('Line')} ${id} ${t('routeStations')}` }}
			/>

			{stationsData.map((station, index) => (
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
					{index !== stationsData.length - 1 && (
						<View style={[styles.timeContainer]}>
							<View style={styles.verticalLine}></View>
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
