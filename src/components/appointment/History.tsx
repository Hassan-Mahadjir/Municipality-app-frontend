import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { scale, verticalScale } from 'react-native-size-matters';
import Card from './Card';

const appointments = [
	{
		id: 1,
		time: '10:30Am',
		date: '20/09/2024',
		with: 'mayor',
		status: 'completed',
	},
	{
		id: 2,
		time: '10:30Am',
		date: '20/09/2024',
		with: 'mayor',
		status: 'completed',
	},
];
const History = () => {
	return (
		<FlatList
			data={appointments}
			renderItem={({ item }) => <Card data={item} />}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{
				gap: scale(10),
				paddingBottom: verticalScale(200),
				marginTop: verticalScale(20),
			}}
		/>
	);
};

export default History;
