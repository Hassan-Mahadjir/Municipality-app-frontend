import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { router, Stack } from 'expo-router';
import DepartmentCard from '@/components/services/DepartmentCard';
const departments = [
	{
		id: 1,
		name: 'Health',
		description:
			'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		contact: 'hm.mahadjir@gmail.com',
		imageUrl:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtg6SNRxoTBGTHMxnV59khl2t1dAS0oynUMg&s',
	},
	{
		id: 2,
		name: 'Traffic',
		description:
			'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		contact: 'hm.mahadjir@gmail.com',
		imageUrl:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtg6SNRxoTBGTHMxnV59khl2t1dAS0oynUMg&s',
	},
];
const municipalDepartment = () => {
	return (
		<View>
			<Stack.Screen options={{ title: 'Municipality Departments' }} />
			<FlatList
				data={departments}
				renderItem={({ item }) => (
					<DepartmentCard
						imageUrl={item.imageUrl}
						departmentName={item.name}
						onSeeDetails={() => router.push(`./department/${item.id}`)}
					/>
				)}
			/>
		</View>
	);
};

export default municipalDepartment;

const styles = StyleSheet.create({});
