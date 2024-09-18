import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Card from './Card';
import { scale, verticalScale } from 'react-native-size-matters';
const appointments = [
	{
		id: 1,
		time: '10:30Am',
		date: '20/09/2024',
		with: 'mayor',
		status: 'accepted',
	},
	{
		id: 2,
		time: '10:30Am',
		date: '20/09/2024',
		with: 'mayor',
		status: 'accepted',
	},
];
const MyAppointment = () => {
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

export default MyAppointment;

const styles = StyleSheet.create({});
