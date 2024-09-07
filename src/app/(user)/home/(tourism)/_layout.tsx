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
			<Stack.Screen name='[place]' options={{ headerShown: false }} />
			<Stack.Screen name='restaurant' options={{ headerShown: false }} />
			<Stack.Screen name='historicalPlaces' options={{ headerShown: true }} />
			<Stack.Screen name='restaurants' options={{ headerShown: true }} />
			<Stack.Screen name='paymentPoints' options={{ headerShown: true }} />
		</Stack>
	);
};

export default tourismLayout;
