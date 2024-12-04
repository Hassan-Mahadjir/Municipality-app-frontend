import { View, FlatList, RefreshControl, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { router, Stack } from 'expo-router';
import SearchField from '@/components/services/Search';
import VechileCard from '@/components/services/VechileCard';
import { scale, verticalScale } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import { useVehicle, useVehicles } from '@/services/api/vehicle';
import { VehicleValues } from '@/types/vehicle.type';
import { COLORS } from '@/constants/Colors';

const collectedVehicle = () => {
	const { t } = useTranslation();
	const { i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();
	const { vehicleData, isLoading, refetch, isFetching } = useVehicles();

	const noResultFound = t('noResultFound');
	const searchbyplatenumber = t('searchbyplatenumber');

	const vehicles = vehicleData?.data.data || [];
	const [searchQuery, setSearchQuery] = useState('');
	const [filteredVehicles, setFilteredVehicles] =
		useState<VehicleValues[]>(vehicles);

	// Update filtered hospitals whenever data or search query changes
	useEffect(() => {
		if (searchQuery.trim() === '') {
			setFilteredVehicles(vehicles);
		} else {
			setFilteredVehicles(
				vehicles.filter((vehicle) =>
					vehicle.plateNumber.toLowerCase().includes(searchQuery.toLowerCase())
				)
			);
		}
	}, [vehicles, searchQuery]);

	// Pull-to-refresh handler
	const onRefresh = async () => {
		await refetch();
	};

	return (
		<View style={{ flex: 1 }}>
			<Stack.Screen options={{ title: t('collectedVehicle') }} />
			<SearchField
				placeholder={searchbyplatenumber}
				onChangeText={setSearchQuery}
			/>
			<View style={{ margin: scale(10), flex: 1 }}>
				<FlatList
					data={filteredVehicles}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ paddingBottom: verticalScale(80) }}
					refreshControl={
						<RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
					}
					renderItem={({ item }) => (
						<VechileCard
							keyDescription={item.brand}
							imageUri={item.imageUrl}
							plateno={item.plateNumber}
							date={item.collectedDate.split('T')[0]}
							onSeeDetails={() => router.push(`./${item.id}`)}
						/>
					)}
					ListEmptyComponent={
						isLoading ? null : (
							<Text
								style={{
									fontSize: scale(16),
									color: COLORS.secondary,
									textAlign: 'center',
									marginTop: verticalScale(10),
								}}
							>
								{searchQuery.trim() ? noResultFound : 'No hospitals found.'}
							</Text>
						)
					}
				/>
			</View>
		</View>
	);
};

export default collectedVehicle;
