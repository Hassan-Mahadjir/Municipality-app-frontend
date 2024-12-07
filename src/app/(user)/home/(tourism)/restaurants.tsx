import { View, Text, ScrollView, Image, FlatList } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { router, Stack } from 'expo-router';
import SearchField from '@/components/services/Search';
import { useTranslation } from 'react-i18next';
import { styles } from '@/styles/historicalPlaces';
import { useRestaurants } from '@/services/api/tourism';
import { RestaurantValues } from '@/types/tourism.type';

export default function Restaurants() {
	const { t } = useTranslation();
	const { restData, isLoading, refetch, isFetching } = useRestaurants();
	const rest = restData?.data.data || [];
	const [filteredRestaurants, setFilteredPlaces] =
		useState<RestaurantValues[]>(rest);
	const searchbyplacename = t('searchbyplacename');
	const restaurant = t('restaurant');
	return (
		<View>
			<Stack.Screen options={{ title: restaurant }} />
			<SearchField
				placeholder={searchbyplacename}
				onChangeText={(text) => console.log('Search text:', text)}
			/>
			<FlatList
				numColumns={2}
				data={rest}
				contentContainerStyle={{ paddingVertical: 10 }}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => (
					<View style={styles.itemContainer}>
						<Image
							source={{ uri: item.images[0].imageUrl }}
							style={styles.pageImage}
						/>
						<TouchableOpacity
							onPress={() => router.push(`./restaurant/${item.id}`)}
						>
							<Text style={styles.imageText}>{item.name}</Text>
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
	);
}
