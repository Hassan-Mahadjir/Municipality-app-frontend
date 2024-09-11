import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const disasterPoint = () => {
	return (
		<View>
			<Stack.Screen options={{ title: 'Disaster Gathering Point' }} />
			<Text>disasterPoint</Text>
		</View>
	);
};

export default disasterPoint;
