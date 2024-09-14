import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import GatherPointCard from '@/components/services/GatherPointCard';
import { scale } from 'react-native-size-matters';
const points = [
	{
		id: 1,
		name: 'Hassan',
		capacity: '300',
		location: 'Karakol,Famagusta, Cyprus.',
	},
	{
		id: 2,
		name: 'Nour',
		capacity: '300',
		location: 'Karakol,Famagusta, Cyprus.',
	},
	{
		id: 3,
		name: 'Hassan',
		capacity: '300',
		location: 'Karakol,Famagusta, Cyprus.',
	},
];
const disasterPoint = () => {
	return (
		<View>
			<Stack.Screen options={{ title: 'Disaster Gathering Point' }} />

			<FlatList
				data={points}
				contentContainerStyle={{ margin: scale(5), padding: scale(10) }}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<GatherPointCard
						name={item.name}
						location={item.location}
						capacity={item.capacity}
					/>
				)}
			/>
		</View>
	);
};

export default disasterPoint;
