import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getItem(key: string): Promise<string | boolean | null> {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value !== null) {
			// Try to parse as a boolean first, otherwise return as string
			const parsedValue = JSON.parse(value);
			if (typeof parsedValue === 'boolean' || typeof parsedValue === 'string') {
				return parsedValue;
			}
		}
		return value;
	} catch (error) {
		console.error('Error getting item from AsyncStorage:', error);
		return null;
	}
}

export async function setItem(
	key: string,
	value: string | boolean
): Promise<void> {
	try {
		const valueToStore = JSON.stringify(value);
		await AsyncStorage.setItem(key, valueToStore);
	} catch (error) {
		console.error('Error setting item in AsyncStorage:', error);
	}
}

export async function removeItem(key: string): Promise<void> {
	try {
		await AsyncStorage.removeItem(key);
	} catch (error) {
		console.error('Error removing item from AsyncStorage:', error);
	}
}
