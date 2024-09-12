import React from 'react';
import { Stack } from 'expo-router';
import { COLORS } from '@/constants/Colors';

const routLayout = () => {
	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: COLORS.secondary },
				headerTintColor: '#fff',
				headerTitleAlign: 'center',
			}}
		>
			<Stack.Screen name='[id]' />
		</Stack>
	);
};

export default routLayout;
