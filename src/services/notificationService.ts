import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Alert } from 'react-native';

// Function to register for push notifications
export async function registerForPushNotificationsAsync() {
	if (Device.isDevice) {
		const { status: existingStatus } =
			await Notifications.getPermissionsAsync();
		let finalStatus = existingStatus;

		if (existingStatus !== 'granted') {
			const { status } = await Notifications.requestPermissionsAsync();
			finalStatus = status;
		}

		console.log('Notification Permission Status:', finalStatus);

		if (finalStatus !== 'granted') {
			Alert.alert('Failed to get push token for push notification!');
			return null;
		}

		const token = (await Notifications.getExpoPushTokenAsync()).data;
		console.log('Push Token:', token);
		return token;
	} else {
		Alert.alert('Must use a physical device for push notifications');
		return null;
	}
}

// Function to send a notification
export async function sendNotification(title: string, body: string) {
	try {
		await Notifications.scheduleNotificationAsync({
			content: {
				title,
				body,
			},
			trigger: { seconds: 2 }, // Trigger after 1 second
		});
	} catch (error) {
		console.error('Error scheduling notification:', error);
	}
}
