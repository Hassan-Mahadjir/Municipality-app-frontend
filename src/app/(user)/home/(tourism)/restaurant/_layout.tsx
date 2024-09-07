import { Stack } from 'expo-router';
import React from 'react';

const restaurantLayout = () => {
	return (
		<Stack>
			<Stack.Screen name='[restaurant]' options={{ headerShown: false }} />
		</Stack>
	);
};

export default restaurantLayout;
