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
			<Stack.Screen name='pharamcy' />
		</Stack>
	);
};

export default healthLayout;
