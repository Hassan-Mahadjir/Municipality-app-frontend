import { View, FlatList, RefreshControl } from 'react-native';
import React, { useMemo, useState } from 'react';
import Header from '@/components/services/Header';
import { router } from 'expo-router';
import { scale, verticalScale } from 'react-native-size-matters';
import Card from '@/components/services/eventCard';
import { useTranslation } from 'react-i18next';
import EventCategory from '@/components/services/eventCategory';
import { useEvent } from '@/services/api/community';
import { EventValues } from '@/types/community.type';

const event = () => {
	const { t, i18n } = useTranslation();
	const lang = i18n.language.toUpperCase(); // Device language
	const categories = {
		all: t('all'),
		sport: t('sport'),
		concert: t('concert'),
		theater: t('theater'),
		music: t('music'),
		culture: t('culture'),
		science: t('science'),
	};
	const types = Object.values(categories);
	const [selectedCategory, setSelectedCategory] = useState(t('all'));

	const { eventData, isLoading, refetch, isFetching } = useEvent(); // Add `refetch` and `isFetching` for refresh control
	const data: EventValues[] = eventData?.data.data || [];

	// Filter and translate the events
	const filteredEvent = useMemo(() => {
		return data
			.map((item) => {
				const translation = item.translations.find((t) => t.language === lang);
				return translation ? { ...item, ...translation, id: item.id } : item;
			})
			.filter((item) => {
				return (
					selectedCategory === t('all') ||
					item.category.toLowerCase() === selectedCategory.toLowerCase()
				);
			});
	}, [data, lang, selectedCategory]);

	// Pull-to-refresh handler
	const onRefresh = async () => {
		await refetch();
	};

	return (
		<View style={{ flex: 1 }}>
			<Header
				title={t('event')}
				backgroundImage={{
					uri: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendywei-1190298.jpg&fm=jpg',
				}}
				onBackPress={() => router.back()}
			/>

			<FlatList
				data={filteredEvent}
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
				refreshControl={
					<RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
				}
			/>
		</View>
	);
};

export default event;
