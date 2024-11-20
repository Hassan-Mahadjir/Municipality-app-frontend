import React from 'react';
import { Stack } from 'expo-router';

const eventlDetailLayout = () => {
	return (
		<Stack>
			<Stack.Screen name='[id]' options={{ headerShown: false }} />
		</Stack>
	);
};

export default eventlDetailLayout;
