import { View, FlatList } from 'react-native';
import React from 'react';
import { router, Stack } from 'expo-router';
import SearchField from '@/components/services/Search';
import VechileCard from '@/components/services/VechileCard';
import { scale, verticalScale } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

const data = [
	{
		id: 1,
		plateno: 'AB123',
		date: '5 Days',
		discription: 'Blue BMW',
		imageurl:
			'https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg',
	},
	{
		id: 2,
		plateno: 'CD123',
		date: '5 Days',
		discription: 'Blue BMW',
		imageurl:
			'https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg',
	},
	{
		id: 3,
		plateno: 'CD123',
		date: '5 Days',
		discription: 'Blue BMW',
		imageurl:
			'https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg',
	},
	{
		id: 4,
		plateno: 'AB123',
		date: '5 Days',
		discription: 'Blue BMW',
		imageurl:
			'https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg',
	},
	{
		id: 5,
		plateno: 'CD123',
		date: '5 Days',
		discription: 'Blue BMW',
		imageurl:
			'https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg',
	},
	{
		id: 6,
		plateno: 'CD123',
		date: '5 Days',
		discription: 'Blue BMW',
		imageurl:
			'https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg',
	},
];

const CollectedVehicle = () => {
	const { t } = useTranslation(); // Initialize translation

	// Translated strings
	const collectedDate = t('collectedDate');
	const searchPlaceholder = t('searchByPlate');
	const fiveDays = t('fiveDays'); // Translation for "5 Days"
	

	return (
		<View style={{ flex: 1 }}>
			{/* Set translated title */}
			<Stack.Screen options={{ title: t('collectedVehicle') }} />

			{/* Search bar placeholder with translation */}
			<SearchField
				placeholder={searchPlaceholder}
				onChangeText={(text) => console.log('Search text:', text)}
			/>

			<View style={{ margin: scale(10) }}>
				<FlatList
					data={data}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ paddingBottom: verticalScale(80) }}
					renderItem={({ item }) => (
						<VechileCard
							keyDescription={item.discription}
							imageUri={item.imageurl}
							plateno={item.plateno}
							// Use translated string for date (e.g., "5 Days" -> "5 Gün")
							date={fiveDays}
							onSeeDetails={() => router.push(`./${item.id}`)}
						/>
					)}
				/>
			</View>
		</View>
	);
};

export default CollectedVehicle;
