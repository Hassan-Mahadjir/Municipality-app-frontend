import { Stack } from 'expo-router';
import React from 'react';
import { COLORS } from '@/constants/Colors';

const healthLayout = () => {
	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: COLORS.secondary },
				headerTintColor: '#fff',
				headerTitleAlign: 'center',
			}}
		>
			<Stack.Screen name='index' options={{ headerShown: false }} />
			<Stack.Screen name='hospitalScreen' options={{ headerShown: true }} />
			<Stack.Screen name='[Location]' options={{ headerShown: true }} />
			<Stack.Screen name='pharamacyScreen' options={{ headerShown: true }} />
		</Stack>
	);
};

export default healthLayout;
