import { View, Text, FlatList } from 'react-native';
import React from 'react';
import Header from '@/components/services/Header';
import { router } from 'expo-router';
import HealthServicesComponent from '@/components/services/HealthServicesComponent';
import { verticalScale } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
const sectionData = [
	{
		image:
			'https://www.capitalleasegroup.com/wp-content/uploads/2020/10/vehicle-fleet-maintenance-services.jpg',
		sectionName: 'collectedVehicle',
		pageName: 'collectedVehicle',
	},
	{
		image: 'https://cyprus-mail.com/wp-content/uploads/2023/06/bus-1.jpg',
		sectionName: 'busTracking',
		pageName: 'busTracking',
	},
	{
		image:
			'https://thumbs.dreamstime.com/b/fire-assembly-point-sign-gathering-point-signboard-emergency-evacuation-vector-graphic-design-logo-website-social-media-fire-227395003.jpg',
		sectionName: 'disasterPoint',
		pageName: 'disasterPoint',
	},
];
const trafficIndex = () => {
	const { t } = useTranslation();
	const collectedVehicle= "Collected Vehicle";
	const busTracking= "Bus Tracking";
	const disasterPoint= "Disaster Point";



	return (
		<View style={{ flex: 1 }}>
			<Header
				title={t('Traffic')}
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
						title={t(item.sectionName)}
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
