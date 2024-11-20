import { Stack } from 'expo-router';
import React from 'react';
import { COLORS } from '@/constants/Colors';

const municipalityLayout = () => {
	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: COLORS.secondary },
				headerTintColor: '#fff',
				headerTitleAlign: 'center',
			}}
		>
			<Stack.Screen name='index' options={{ headerShown: false }} />
			<Stack.Screen name='municipalDepartment' />
			<Stack.Screen name='contactInfo' />
			<Stack.Screen name='department' options={{ headerShown: false }} />
		</Stack>
	);
};

export default municipalityLayout;
