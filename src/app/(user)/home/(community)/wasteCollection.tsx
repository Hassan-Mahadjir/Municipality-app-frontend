import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import waste from '@/assets/data/waste.json';
import { Stack } from 'expo-router';
import { scale, verticalScale } from 'react-native-size-matters';
import NewsCategory from '@/components/services/NewsCategory';
import WasteCard from '@/components/services/WasteCard';
import { useTranslation } from 'react-i18next';
const types = ['All', 'Organic', 'Recyclable', 'Non-Recyclable'];

const wasteCollection = () => {
	const { t } = useTranslation();
	const wasteCollection = t('wasteCollection');
	const [selectedCategory, setSelectedCategory] = useState('All');

	const filteredData =
		selectedCategory === 'All'
			? waste // Show all news when "Latest" is selected
			: waste.filter((item) => item.type === selectedCategory);
	return (
		<View>
			<Stack.Screen options={{ title: t('wasteCollection') }} />
			<FlatList
				data={filteredData}
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
				renderItem={({ item }) => <WasteCard data={item} />}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					gap: scale(10),
					paddingBottom: verticalScale(200),
				}}
			/>
		</View>
	);
};

export default wasteCollection;

const styles = StyleSheet.create({});
