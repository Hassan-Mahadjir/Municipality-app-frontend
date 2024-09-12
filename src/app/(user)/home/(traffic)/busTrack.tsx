import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { scale, verticalScale } from 'react-native-size-matters';
import NewsCategory from '@/components/services/NewsCategory';
import BusCard from '@/components/services/BusCard';
import busTracking from '@/assets/data/busTracking.json';
const days = [
	'All',
	'Monday',
	'Tuesday',
	'Wendnsday',
	'Thursday',
	'Friday',
	'Sunday',
	'Saturday',
];
const busTrack = () => {
	const [selectedCategory, setSelectedCategory] = useState('All');

	const filteredNews =
		selectedCategory === 'All'
			? busTracking // Show all news when "Latest" is selected
			: busTracking.filter((item) => item.day === selectedCategory); // Filter for other types

	return (
		<View>
			<Stack.Screen options={{ title: 'Bus Track' }} />

			<FlatList
				data={filteredNews}
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
