import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { router, Stack } from 'expo-router';
import animal from '@/assets/data/animal.json';
import shelter from '@/assets/data/shelter.json';
import { scale, verticalScale } from 'react-native-size-matters';
import NewsCategory from '@/components/services/NewsCategory';
import SearchField from '@/components/services/Search';
import HealthItems from '@/components/services/HealthItems';
import AnimalCard from '@/components/services/animalCard';
import Card from '@/components/services/Card';

const types = ['Shelter', 'lost&Found'];

const animalMain = () => {
	const [selectedCategory, setSelectedCategory] = useState('lost&Found');
	const filteredData = selectedCategory === 'Shelter' ? shelter : animal;

	const renderItem = ({ item }) => {
		if (selectedCategory === 'Shelter') {
			// Render Shelter data
			return (
				<View style={{ marginHorizontal: scale(10) }}>
					<HealthItems
						name={item.name}
						location={item.location}
						onSeeLocation={() =>
							router.push(`/(user)/home/(health)/${item.onPress}`)
						}
						imageUri={item.imageUrl}
					/>
				</View>
			);
		} else {
			// Render Animal (lost&Found) data in a 2-column layout
			return (
				<View style={{ flex: 1, margin: scale(5) }}>
					<AnimalCard data={item} />
				</View>
			);
		}
	};

	return (
		<View>
			<Stack.Screen options={{ title: 'Waste Collection' }} />
			<FlatList
				key={selectedCategory === 'lost&Found' ? 'lostFound' : 'shelter'}
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
						<SearchField
							placeholder='search '
							onChangeText={(val) => console.log(val)}
						/>
					</>
				}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					gap: selectedCategory === 'lost&Found' ? scale(10) : scale(5),
					paddingBottom: verticalScale(200),
				}}
				renderItem={renderItem}
				// Display 2 items per row for "lost&Found"
				numColumns={selectedCategory === 'lost&Found' ? 2 : 1}
			/>
		</View>
	);
};

export default animalMain;
