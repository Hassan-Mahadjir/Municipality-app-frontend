import { View, FlatList } from 'react-native';
import React, { useState } from 'react';
import Header from '@/components/services/Header';
import { router } from 'expo-router';
import { scale, verticalScale } from 'react-native-size-matters';
import Card from '@/components/services/eventCard';
import news from '@/assets/data/news.json';

import { useTranslation } from 'react-i18next';
import EventCategory from '@/components/services/eventCategory';
import { useEvent } from '@/services/api/community';

const event = () => {
	const { t, i18n } = useTranslation();
	const lang = i18n.language.toUpperCase(); // Device language
	const types = [t('all'), t('sport'), t('concert'), t('theater')];
	const [selectedCategory, setSelectedCategory] = useState(t('all'));

	const { eventData, isLoading, isFetching } = useEvent();
	const data = eventData?.data.data || [];

	// Filter the data based on the selected category and device language
	const filteredNews = data
		.map((item) => {
			// Find the translation matching the device language
			const translation = item.translations.find((t) => t.language === lang);

			// Return the item with translated data if a translation exists
			return translation
				? {
						...item,
						...translation, // Overwrite with translated fields
				  }
				: item; // Keep original if no translation is available
		})
		.filter((item) => {
			// Filter by category (case-insensitive)
			return (
				selectedCategory === t('all') || // If 'All' is selected, include all items
				item.category.toLowerCase() === selectedCategory.toLowerCase()
			);
		});

	// Render filteredNews or handle the UI

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
