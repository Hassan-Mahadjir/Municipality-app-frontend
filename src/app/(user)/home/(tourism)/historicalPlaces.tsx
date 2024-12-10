import { View, Text, Image, FlatList, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
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
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {
		if (searchQuery.trim() === '') {
			setFilteredPlaces(places);
		} else {
			setFilteredPlaces(
				places.filter((place) =>
					place.name.toLowerCase().includes(searchQuery.toLowerCase())
				)
			);
		}
	}, [places, searchQuery]);
	const onRefresh = async () => {
		await refetch();
	};
	return (
		<View style={{ flex: 1 }}>
			<Stack.Screen options={{ title: histPlaces }} />
			<SearchField
				placeholder={searchbyplacename}
				onChangeText={setSearchQuery}
			/>
			<FlatList
				numColumns={2}
				data={filteredPlaces}
				contentContainerStyle={{ paddingVertical: 10 }}
				keyExtractor={(item, index) => index.toString()}
				refreshControl={
					<RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
				}
				renderItem={({ item }) => (
					<View style={styles.itemContainer}>
						<TouchableOpacity onPress={() => router.push(`./${item.id}`)}>
						<Image source={{ uri: item.images[0].imageUrl}} style={styles.pageImage} />
						<TouchableOpacity
							onPress={() => router.push(`./${item.id}`)}
						></TouchableOpacity>
							<Text style={styles.imageText}>{item.name}</Text>
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
	);
}
