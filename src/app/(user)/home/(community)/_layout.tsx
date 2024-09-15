import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { COLORS } from '@/constants/Colors';

const communityLayout = () => {
	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: COLORS.secondary },
				headerTintColor: '#fff',
				headerTitleAlign: 'center',
			}}
		>
			<Stack.Screen name='index' options={{ headerShown: false }} />
			<Stack.Screen name='animal' options={{ headerShown: false }} />
			<Stack.Screen name='animalMain' />
			<Stack.Screen name='wasteCollection' />
			<Stack.Screen name='emergency' />
			<Stack.Screen name='municipalDepartment' />
			<Stack.Screen name='contactInfo' />
			<Stack.Screen name='department' options={{ headerShown: false }} />
		</Stack>
	);
};

export default communityLayout;
