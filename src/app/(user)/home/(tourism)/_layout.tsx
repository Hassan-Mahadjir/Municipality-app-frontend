import { Stack } from 'expo-router'
import React from 'react'
import historicalPlaces from './historicalPlaces';
import tourismMain from './tourismMain';
import ghostTown from './ghostTown';

const tourismLayout = () => {
	return (
		<Stack>
			<Stack.Screen name='index' options={{ headerShown: false }} />
			<Stack.Screen
				name="tourismMain" options={{ headerShown: false}}
        	/>
			<Stack.Screen
				name="historicalPlaces" options={{ headerShown: false}}
        	/>
			<Stack.Screen
				name="ghostTown" options={{ headerShown: false}}
        	/>
		</Stack>
	);
};

export default tourismLayout;
