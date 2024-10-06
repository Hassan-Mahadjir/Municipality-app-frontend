import { FlatList, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { router, Stack } from 'expo-router';
import animal from '@/assets/data/animal.json';
import shelter from '@/assets/data/shelter.json';
import { scale, verticalScale } from 'react-native-size-matters';
import NewsCategory from '@/components/services/NewsCategory';
import SearchField from '@/components/services/Search';
import HealthItems from '@/components/services/HealthItems';
import AnimalCard from '@/components/services/animalCard';
import { useTranslation } from 'react-i18next';

const types = ['Shelter', 'lost&Found'];

const AnimalMain = () => {
	const [selectedCategory, setSelectedCategory] = useState('lost&Found');
	const filteredData = selectedCategory === 'Shelter' ? shelter : animal;
	const { t } = useTranslation();

	const renderItem = ({ item }) => {
		if (selectedCategory === 'Shelter') {
			// Render Shelter data
			return (
				<View style={styles.itemContainer}>
					<HealthItems
						name={item.name}
						location={item.location}
						onSeeLocation={() => router.push(`/(user)/home/(health)/${item.onPress}`)}
						imageUri={item.imageUrl}
					/>
				</View>
			);
		} else {
			// Render Animal (lost&Found) data
			return (
				<View style={styles.itemContainer}>
					<AnimalCard data={item} />
				</View>
			);
		}
	};

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: 'Waste Collection' }} />
			<FlatList
				key={selectedCategory === 'lost&Found' ? 'lostFound' : 'shelter'}
				data={filteredData}
				ListHeaderComponent={
					<>
						<FlatList
							data={types}
							horizontal
							keyExtractor={(item) => item}
							style={styles.categoryList}
							contentContainerStyle={styles.categoryContainer}
							showsHorizontalScrollIndicator={false}
							renderItem={({ item }) => (
								<NewsCategory
									item={item}
									selectedCategory={selectedCategory}
									setSelectedCategory={setSelectedCategory}
								/>
							)}
						/>
						<SearchField
							placeholder={t('search')} // Placeholder text
							onChangeText={(val) => console.log(val)}
						/>
					</>
				}
				renderItem={renderItem}
				numColumns={selectedCategory === 'lost&Found' ? 2 : 1}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					gap: selectedCategory === 'lost&Found' ? scale(10) : scale(5),
					paddingBottom: verticalScale(200),
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: scale(10),
	},
	itemContainer: {
		margin: scale(5),
		flex: 1,
	},
	categoryList: {
		marginVertical: verticalScale(10),
	},
	categoryContainer: {
		gap: 5,
	},
});

export default AnimalMain;
