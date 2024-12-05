import { View, Text, Image, FlatList } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import historicalplaces from '../../../../assets/data/historicalPlaces.json';
import { router, Stack } from 'expo-router';
import SearchField from '@/components/services/Search';
import { useTranslation } from 'react-i18next';
import { styles } from '@/styles/historicalPlaces';
import { usePlaces } from '@/services/api/tourism';
import { PlaceValues } from '@/types/tourism.type';

export default function historicalPlaces() {
	const { t } = useTranslation();

	const { placeData, isLoading, refetch, isFetching } = usePlaces();
	const searchbyplacename = t('searchbyplacename');
	const histPlaces = t('histPlaces');
	const places = placeData?.data.data || [];
	const [filteredPlaces, setFilteredPlaces] =
	useState<PlaceValues[]>(places);
	return (
		<View style={{ flex: 1 }}>
			<Stack.Screen options={{ title: histPlaces }} />
			<SearchField
				placeholder={searchbyplacename}
				onChangeText={(text) => console.log('Search text:', text)}
			/>
			<FlatList
				numColumns={2}
				data={places}
				contentContainerStyle={{ paddingVertical: 10 }}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => (
					<View style={styles.itemContainer}>
						<Image source={{ uri: item.images[0].imageUrl}} style={styles.pageImage} />
						<TouchableOpacity
							onPress={() => router.push(`./${item.id}`)}
						>
							<Text style={styles.imageText}>{item.name}</Text>
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
	);
}
