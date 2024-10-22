import { View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { scale, verticalScale } from 'react-native-size-matters';
import NewsCategory from '@/components/services/NewsCategory';
import BusCard from '@/components/services/BusCard';
import busTracking from '@/assets/data/busTracking.json';
import { useTranslation } from 'react-i18next';

const busTrack = () => {
	const [selectedCategory, setSelectedCategory] = useState('All');
	const { t } = useTranslation();
	const busTrack = t('Bus Tracking')

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

	const filteredNews =
		selectedCategory === t('all')
			? busTracking // Show all buses when "All" is selected
			: busTracking.filter((item) => item.day === selectedCategory); // Filter for other days

	return (
		<View>
			<Stack.Screen options={{ title: t('busTrack') }} />

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
