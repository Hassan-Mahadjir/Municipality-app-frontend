import { View, Text, ScrollView, Image, FlatList ,RefreshControl} from 'react-native';
import React, { useEffect, useState } from 'react';
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
			const [searchQuery, setSearchQuery] = useState('');
		
	const searchbyplacename = t('searchbyplacename');
	const restaurant = t('restaurant');
	console.log(rest)
		useEffect(() => {
			if (searchQuery.trim() === '') {
				setFilteredPlaces(rest);
			} else {
				setFilteredPlaces(
					rest.filter((rest) =>
						rest.name.toLowerCase().includes(searchQuery.toLowerCase())
					)
				);
			}
		}, [rest, searchQuery]);
		const onRefresh = async () => {
			await refetch();
		};
	return (
		<View style={{flex:1}}>
			<Stack.Screen options={{ title: restaurant }} />
			<SearchField
				placeholder={searchbyplacename}
				onChangeText={setSearchQuery }
			/>
			<FlatList
				numColumns={2}
				data={filteredRestaurants}
				contentContainerStyle={{ paddingVertical: 10 }}
				keyExtractor={(item, index) => index.toString()}
								refreshControl={
									<RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
								}
				renderItem={({ item }) => (
					<View style={styles.itemContainer}>
						<TouchableOpacity onPress={() => router.push(`./restaurant/${item.id}`)}>
						<Image
							source={{ uri: item.images[0].imageUrl }}
							style={styles.pageImage}
						/>
						<TouchableOpacity
							onPress={() => router.push(`./restaurant/${item.id}`)}
						>
							<Text style={styles.imageText}>{item.name}</Text></TouchableOpacity>
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
	);
}
