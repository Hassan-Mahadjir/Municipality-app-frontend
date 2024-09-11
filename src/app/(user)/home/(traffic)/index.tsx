import { View, Text, FlatList } from 'react-native';
import React from 'react';
import Header from '@/components/services/Header';
import { router } from 'expo-router';
import HealthServicesComponent from '@/components/services/HealthServicesComponent';
import { verticalScale } from 'react-native-size-matters';
const sectionData = [
	{
		image:
			'https://www.capitalleasegroup.com/wp-content/uploads/2020/10/vehicle-fleet-maintenance-services.jpg',
		sectionName: 'Collected Vehicle',
		pageName: 'collectedVehicle',
	},
	{
		image: 'https://cyprus-mail.com/wp-content/uploads/2023/06/bus-1.jpg',
		sectionName: 'Bus Tracking',
		pageName: 'busTrack',
	},
	{
		image:
			'https://thumbs.dreamstime.com/b/fire-assembly-point-sign-gathering-point-signboard-emergency-evacuation-vector-graphic-design-logo-website-social-media-fire-227395003.jpg',
		sectionName: 'Disaster Gathering Points',
		pageName: 'disasterPoint',
	},
];
const trafficIndex = () => {
	return (
		<View style={{ flex: 1 }}>
			<Header
				title='Traffic'
				backgroundImage={{
					uri: 'https://www.abc27.com/wp-content/uploads/sites/55/2022/09/GettyImages-148421596-e1662562076357.jpg?w=2560&h=1440&crop=1',
				}}
				onBackPress={() => router.back()}
			/>
			<FlatList
				data={sectionData}
				contentContainerStyle={{ paddingBottom: verticalScale(80) }}
				keyExtractor={(item, index) => index.toString()}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<HealthServicesComponent
						title={item.sectionName}
						backgroundImage={{
							uri: item.image,
						}}
						onPress={() => router.push(`./${item.pageName}`)}
					/>
				)}
			/>
		</View>
	);
};

export default trafficIndex;
