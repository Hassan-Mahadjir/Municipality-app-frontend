import React from 'react';
import { Stack } from 'expo-router';
import { COLORS } from '@/constants/Colors';

const trafficLa = () => {
	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: COLORS.secondary },
				headerTintColor: '#fff',
				headerTitleAlign: 'center',
			}}
		>
			<Stack.Screen name='index' options={{ headerShown: false }} />
		</Stack>
	);
};

export default trafficLa;
