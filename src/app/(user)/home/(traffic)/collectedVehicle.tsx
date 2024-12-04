import { View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { router, Stack } from 'expo-router';
import SearchField from '@/components/services/Search';
import VechileCard from '@/components/services/VechileCard';
import { scale, verticalScale } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import { useVehicle, useVehicles } from '@/services/api/traffic';
import { VehicleValues } from '@/types/traffic.type';



const collectedVehicle = () => {
	const { t } = useTranslation();
	const { i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();
	const { vehicleData, isLoading } = useVehicles();
	const vehicles = vehicleData?.data.data || [];
	const [searchQuery, setSearchQuery] = useState('');
	const [filteredHospitals, setFilteredHospitals] =
		useState<VehicleValues[]>(vehicles);
	const noResultFound = t('noResultFound');
	const searchbyplatenumber= t('searchbyplatenumber')
	
	return (
		<View style={{ flex: 1 }}>
			<Stack.Screen options={{ title: t('collectedVehicle') }} />
			<SearchField
				placeholder={searchbyplatenumber}
				onChangeText={(text) => console.log('Search text:', text)}
			/>
			<View style={{ margin: scale(10) }}>
				<FlatList
					data={vehicles}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ paddingBottom: verticalScale(80) }}
					renderItem={({ item }) => (
						<VechileCard
							keyDescription={item.brand}
							imageUri={item.imageUrl}
							plateno={item.plateNumber}
							date={item.collectedDate.split('T')[0]}
							onSeeDetails={() => router.push(`./${item.id}`)}
						/>
					)}
				/>
			</View>
		</View>
	);
};

export default collectedVehicle;
