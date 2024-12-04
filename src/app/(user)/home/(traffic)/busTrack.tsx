import { View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { scale, verticalScale } from 'react-native-size-matters';
import NewsCategory from '@/components/services/NewsCategory';
import BusCard from '@/components/services/BusCard';
import busTracking from '@/assets/data/busTracking.json';
import { useTranslation } from 'react-i18next';
import { useBuses, useVehicles } from '@/services/api/traffic';

const busTrack = () => {
	const [selectedCategory, setSelectedCategory] = useState('All');
	const { t } = useTranslation();

	const days = [
		t('all'),
		t('monday'),
		t('tuesday'),
		t('wednesday'),
		t('thursday'),
		t('friday'),
		t('saturday'),
		t('sunday'),
	];

	const { i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();
	const { busData, isLoading } = useBuses();
	const buses = busData?.data.data || [];

	const filteredBuses =
		selectedCategory === t('all')
			? buses // Show all buses when "All" is selected
			: buses.filter((item) => item.sechdule.some(schedule => schedule.day === selectedCategory)); // Filter for other days

	return (
		<View>
			<Stack.Screen options={{ title: t('busTrack') }} />

			<FlatList
				data={filteredBuses}
				ListHeaderComponent={
					<>
						<FlatList
							data={days}
							horizontal={true}
							keyExtractor={(item) => item}
							style={{ marginVertical: verticalScale(10) }}
							contentContainerStyle={{ gap: 5 }}
							showsHorizontalScrollIndicator={false}
							renderItem={({ item }) => (
								<NewsCategory
									item={item}
									selectedCategory={selectedCategory}
									setSelectedCategory={setSelectedCategory}
								/>
							)}
						/>
					</>
				}
				renderItem={({ item }) => <BusCard data={item} />}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					gap: scale(10),
					paddingBottom: verticalScale(200),
				}}
			/>
		</View>
	);
};

export default busTrack;
