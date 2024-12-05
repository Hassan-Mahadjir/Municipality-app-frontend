import { View, FlatList, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { scale, verticalScale } from 'react-native-size-matters';
import NewsCategory from '@/components/services/NewsCategory';
import BusCard from '@/components/services/BusCard';
import { useTranslation } from 'react-i18next';
import { useBuses } from '@/services/api/traffic';

const busTrack = () => {
	const { t, i18n } = useTranslation();
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

	const lang = i18n.language.toUpperCase();
	const { busData } = useBuses();
	const buses = busData?.data.data || [];

	// Create the array of objects to pass to the FlatList
	const busScheduleData = buses.flatMap((bus) =>
		bus.path.flatMap((path) =>
			path.sechdule.flatMap((schedule) =>
				schedule.timeTable.map((time) => ({
					id: path.id,
					line: path.line,
					from: path.from,
					to: path.to,
					scheduleDay: schedule.day,
					goTime: time.goTime,
					scheduleDayTranslated: schedule.translations[0]?.day || '',
				}))
			)
		)
	);

	// Deduplicate data using a unique combination of fields
	const uniqueBusScheduleData = Array.from(
		new Set(
			busScheduleData.map(
				(item) =>
					`${item.line}-${item.from}-${item.to}-${item.scheduleDay}-${item.goTime}`
			)
		)
	).map((key) =>
		busScheduleData.find(
			(item) =>
				`${item.line}-${item.from}-${item.to}-${item.scheduleDay}-${item.goTime}` ===
				key
		)
	);

	// Filter data based on the selected category
	const filteredScheduleData = uniqueBusScheduleData.filter(
		(item) =>
			item &&
			(selectedCategory.toLowerCase() === t('all').toLowerCase() ||
				item.scheduleDay.toLowerCase() === selectedCategory.toLowerCase() ||
				item.scheduleDayTranslated.toLowerCase() ===
					selectedCategory.toLowerCase())
	);

	// Ensure filtered data contains only valid items
	const validFilteredScheduleData = filteredScheduleData.filter(
		(item) => item != null
	);

	return (
		<View>
			<Stack.Screen options={{ title: t('busTrack') }} />
			<FlatList
				data={validFilteredScheduleData}
				ListHeaderComponent={
					<FlatList
						data={days}
						horizontal
						keyExtractor={(item, index) => `${item}-${index}`} // Unique key for days
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
				}
				keyExtractor={(item) =>
					`${item.line}-${item.from}-${item.to}-${item.scheduleDay}-${item.goTime}`
				} // Unique key for schedule data
				renderItem={({ item }) => {
					if (item) {
						return <BusCard data={item} />;
					}
					return null;
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
