import { View, Text, ScrollView, Image, FlatList } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import restaurants from '../../../../assets/data/restaurants.json';
import { router, Stack } from 'expo-router';
import SearchField from '@/components/services/Search';
import { useTranslation } from 'react-i18next';
import { styles } from '@/styles/historicalPlaces';

export default function historicalPlaces() {
	const { t } = useTranslation();
	const searchbyplacename = t('searchbyplacename');
	const restaurant = t('restaurant')
	return (
		<View>
			<Stack.Screen options={{ title: restaurant }} />
			<SearchField
				placeholder={searchbyplacename}
				onChangeText={(text) => console.log('Search text:', text)}
			/>
			<FlatList
				numColumns={2}
				data={restaurants}
				contentContainerStyle={{ paddingVertical: 10 }}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => (
					<View style={styles.itemContainer}>
						<Image source={{ uri: item.image }} style={styles.pageImage} />
						<TouchableOpacity
							onPress={() =>
								router.push('/(user)/home/(tourism)/restaurant/1')
							}
						>
							<Text style={styles.imageText}>{item.placename}</Text>
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
	);
}
