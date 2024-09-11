import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const busTrack = () => {
	return (
		<View>
			<Stack.Screen options={{ title: 'Bus Track' }} />
			<Text>busTrack</Text>
		</View>
	);
};

export default busTrack;
