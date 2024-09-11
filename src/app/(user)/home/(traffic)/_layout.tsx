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
			<Stack.Screen name='busTrack' />
			<Stack.Screen name='collectedVehicle' />
			<Stack.Screen name='disasterPoint' />
		</Stack>
	);
};

export default trafficLa;
