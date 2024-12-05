import { View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { scale, verticalScale } from 'react-native-size-matters';
import NewsCategory from '@/components/services/NewsCategory';
import BusCard from '@/components/services/BusCard';
import { useTranslation } from 'react-i18next';
import { useBuses } from '@/services/api/traffic';

const busTrack = () => {
	const { t } = useTranslation();
	const [selectedCategory, setSelectedCategory] = useState(t('all'));

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

	const { busData } = useBuses();
	const buses = busData?.data.data || [];
	const { i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();
	// Filter the buses based on the selected category
	const filteredBuses =
		selectedCategory.toLowerCase() === t('all').toLowerCase()
			? buses
			: buses.filter(
					(item) =>
						item.day.toLowerCase() === selectedCategory.toLowerCase() ||
						item.translations.some(
							(translation) =>
								translation.day.toLowerCase() === selectedCategory.toLowerCase()
						)
			  );

	// Create the array of objects to pass to the FlatList
	const busScheduleData = filteredBuses.flatMap((bus) =>
		bus.path.flatMap((path) =>
			path.sechdule.flatMap((schedule) =>
				schedule.timeTable.map((time) => ({
					id: path.id,
					line: path.line,
					from: path.from,
					to: path.to,
					scheduleDay: schedule.day,
					goTime: time.goTime,
				}))
			)
		)
	);

	// Create a unique set based on a combination of line, from, to, scheduleDay, and goTime
	const uniqueBusScheduleData = Array.from(
		new Set(
			busScheduleData.map(
				(a) => `${a.line}-${a.from}-${a.to}-${a.scheduleDay}-${a.goTime}` // Creating a unique key
			)
		)
	).map((id) => {
		// Find the original object based on the unique key
		return busScheduleData.find(
			(a) => `${a.line}-${a.from}-${a.to}-${a.scheduleDay}-${a.goTime}` === id
		);
	});

	const filteredScheduleData = uniqueBusScheduleData.filter(
		(item) =>
			item && // Check if item is not undefined or null
			(selectedCategory.toLowerCase() === t('all').toLowerCase() ||
				item.scheduleDay.toLowerCase() === selectedCategory.toLowerCase())
	);

	const validFilteredScheduleData = filteredScheduleData.filter(
		(item) => item != null
	);

	return (
		<View>
			<Stack.Screen options={{ title: t('busTrack') }} />

			<FlatList
				data={validFilteredScheduleData} // Use the valid filtered data here
				ListHeaderComponent={
					<>
						<FlatList
							data={days}
							horizontal={true}
							keyExtractor={(item, index) => `day-${index}`} // Unique key for each day
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
				keyExtractor={
					(item) =>
						`${item.line}-${item.from}-${item.to}-${item.scheduleDay}-${item.goTime}` // Unique key for each schedule item
				}
				renderItem={({ item }) => {
					// Ensure the item is valid before rendering the BusCard
					if (item) {
						return <BusCard data={item} />;
					}
					return null; // Return null if the item is undefined
				}}
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
