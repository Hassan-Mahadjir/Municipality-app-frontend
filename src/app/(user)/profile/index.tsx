import { View, Text, Button } from 'react-native';
import React from 'react';
import { removeItem } from '@/utils/storage';
import { router } from 'expo-router';

export default function userProfileIndex() {
	return (
		<View>
			<Button
				title='Logout'
				onPress={() => {
					removeItem('token');
					router.replace('/');
				}}
			/>
		</View>
	);
}
