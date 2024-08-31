import { Stack } from 'expo-router';
import React from 'react';
import { COLORS } from '@/constants/Colors';

const tourismLayout = () => {
	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: COLORS.secondary },
				headerTintColor: '#fff',
				headerTitleAlign: 'center',
			}}
		>
			<Stack.Screen name='index' options={{ headerShown: false }} />
			<Stack.Screen name='historicalPlaces' options={{ headerShown: true }} />
			<Stack.Screen name='ghostTown' />
		</Stack>
	);
};

export default tourismLayout;
