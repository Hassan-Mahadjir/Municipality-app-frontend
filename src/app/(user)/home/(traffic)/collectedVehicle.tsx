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
		date: '5 days',
		discription: 'Blue BMW',
		imageurl:
			'https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg',
	},
	{
		id: 2,
		plateno: 'CD123',
		date: '5 days',
		discription: 'Blue BMW',
		imageurl:
			'https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg',
	},
	{
		id: 3,
		plateno: 'CD123',
		date: '5 days',
		discription: 'Blue BMW',
		imageurl:
			'https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg',
	},
	{
		id: 4,
		plateno: 'AB123',
		date: '5 days',
		discription: 'Blue BMW',
		imageurl:
			'https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg',
	},
	{
		id: 5,
		plateno: 'CD123',
		date: '5 days',
		discription: 'Blue BMW',
		imageurl:
			'https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg',
	},
	{
		id: 6,
		plateno: 'CD123',
		date: '5 days',
		discription: 'Blue BMW',
		imageurl:
			'https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg',
	},
];

const collectedVehicle = () => {
	const { t } = useTranslation();

	return (
		<View style={{ flex: 1 }}>
			<Stack.Screen options={{ title: t('collectedVehicle') }} />
			<SearchField
				placeholder={t('searchByPlate')}
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
							date={item.date}
							onSeeDetails={() => router.push(`./${item.id}`)}
						/>
					)}
				/>
			</View>
		</View>
	);
};

export default collectedVehicle;
