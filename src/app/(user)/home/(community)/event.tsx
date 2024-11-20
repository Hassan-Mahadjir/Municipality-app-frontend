import { View, FlatList } from 'react-native';
import React, { useState } from 'react';
import Header from '@/components/services/Header';
import { router } from 'expo-router';
import { scale, verticalScale } from 'react-native-size-matters';
import Card from '@/components/services/eventCard';
import news from '@/assets/data/news.json';
const types = ['All', 'Sport', 'Concert', 'Theater'];
import { useTranslation } from 'react-i18next';
import EventCategory from '@/components/services/eventCategory';

const event = () => {
	const [selectedCategory, setSelectedCategory] = useState('All');
	const { t } = useTranslation();

	const filteredNews =
		selectedCategory === 'All'
			? news // Show all news when "Latest" is selected
			: news.filter((item) => item.type === selectedCategory); // Filter for other types

	return (
		<View>
			<Header
				title={t('event')}
				backgroundImage={{
					uri: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendywei-1190298.jpg&fm=jpg',
				}}
				onBackPress={() => router.back()}
			/>

			<FlatList
				data={filteredNews}
				ListHeaderComponent={
					<>
						<FlatList
							data={types}
							horizontal={true}
							keyExtractor={(item) => item}
							style={{ marginVertical: verticalScale(10) }}
							contentContainerStyle={{ gap: 5 }}
							showsHorizontalScrollIndicator={false}
							renderItem={({ item }) => (
								<EventCategory
									item={item}
									selectedCategory={selectedCategory}
									setSelectedCategory={setSelectedCategory}
								/>
							)}
						/>
					</>
				}
				renderItem={({ item }) => <Card data={item} />}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					gap: scale(10),
					paddingBottom: verticalScale(200),
				}}
			/>
		</View>
	);
};

export default event;
