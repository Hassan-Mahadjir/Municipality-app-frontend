import { View, FlatList } from 'react-native';
import React, { useState } from 'react';
import Header from '@/components/services/Header';
import { router } from 'expo-router';
import { scale, verticalScale } from 'react-native-size-matters';
import NewsCategory from '@/components/services/NewsCategory';
import Card from '@/components/services/Card';
import news from '@/assets/data/news.json';
const types = ['Latest', 'Treding', 'Sport', 'Science'];
import { useTranslation } from 'react-i18next';

const newsIndex = () => {
	const [selectedCategory, setSelectedCategory] = useState('Latest');
	const { t } = useTranslation();
	
	

	const filteredNews =
		selectedCategory === 'Latest'
			? news // Show all news when "Latest" is selected
			: news.filter((item) => item.type === selectedCategory); // Filter for other types

	return (
		<View>
			<Header
				title={t('news')}
				backgroundImage={{
					uri: 'https://about.fb.com/wp-content/uploads/2023/09/GettyImages-686732223.jpg',
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
								<NewsCategory
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
				numColumns={2}
				contentContainerStyle={{
					gap: scale(10),
					paddingBottom: verticalScale(200),
				}}
			/>
		</View>
	);
};

export default newsIndex;
