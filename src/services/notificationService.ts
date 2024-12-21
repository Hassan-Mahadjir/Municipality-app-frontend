import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Alert } from 'react-native';

// Configure notification behavior
Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: true,
		shouldSetBadge: false,
	}),
});

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

		// Optionally send the token to your backend server here
		return token;
	} else {
		Alert.alert('Must use a physical device for push notifications');
		return null;
	}
}

// Function to schedule a notification
export async function sendNotification(title: string, body: string) {
	try {
		await Notifications.scheduleNotificationAsync({
			content: { title, body },
			trigger: { seconds: 2 }, // Trigger after 2 seconds
		});
	} catch (error) {
		console.error('Error scheduling notification:', error);
	}
}

// Function to set up notification listeners
export function setupNotificationListeners() {
	Notifications.addNotificationReceivedListener((notification) => {
		console.log('Notification received:', notification);
		// Handle the received notification (e.g., update the UI)
	});

	Notifications.addNotificationResponseReceivedListener((response) => {
		console.log('Notification response:', response);
		// Handle the user's interaction with the notification
	});
}
