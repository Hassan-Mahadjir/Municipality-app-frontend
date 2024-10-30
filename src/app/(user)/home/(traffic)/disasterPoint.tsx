import { View, FlatList } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import GatherPointCard from '@/components/services/GatherPointCard';
import { scale } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

const points = [
	{
		id: 1,
		name: 'Hassan',
		capacity: '300',
		location: 'Karakol, Famagusta, Cyprus',
	},
	{
		id: 2,
		name: 'Nour',
		capacity: '300',
		location: 'Karakol, Famagusta, Cyprus',
	},
	{
		id: 4,
		name: 'Melisa',
		capacity: '300',
		location: 'Sakarya, Famagusta, Cyprus',
	},
	{
		id: 5,
		name: 'Ayesha',
		capacity: '300',
		location: 'EMU, Famagusta, Cyprus',
	}

];

const disasterPoint = () => {
	const { t } = useTranslation();
	const disasterPoint= "Disaster Point";

	return (
		<View>
			<Stack.Screen options={{ title: t('disasterPoint') }} />

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