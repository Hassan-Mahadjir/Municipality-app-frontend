import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import notifications from '../assets/data/notifications.json';
<<<<<<< HEAD

export default function notification() {
  return (
    <View style={style.notificationContainer}>
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Notifications',
          headerTintColor: '#fff',
          headerStyle: { backgroundColor: '#F64D00' },
          headerTitleAlign: 'center',
        }}
      />
      <FlatList
        data={notifications}
        contentContainerStyle={{ gap: 10 }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={style.notificationSubContainer}>
            <Text style={{ fontSize: 16, marginBottom: 5 }}>
              {item.message}
            </Text>
            <Text>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  notificationContainer: {
    margin: 10,
    marginVertical: 10,
  },
  notificationSubContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
=======
import { COLORS } from '@/constants/Colors';

export default function notification() {
	return (
		<View style={style.notificationContainer}>
			<Stack.Screen
				options={{
					headerShown: true,
					title: 'Notifications',
					headerTintColor: '#fff',
					headerStyle: { backgroundColor: COLORS.secondary },
					headerTitleAlign: 'center',
				}}
			/>
			<FlatList
				data={notifications}
				contentContainerStyle={{ gap: 10 }}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item, index }) => (
					<View style={style.notificationSubContainer}>
						<Text style={{ fontSize: 16, marginBottom: 5 }}>
							{item.message}
						</Text>
						<Text>{item.date}</Text>
					</View>
				)}
			/>
		</View>
	);
}

const style = StyleSheet.create({
	notificationContainer: {
		margin: 10,
		marginVertical: 10,
	},
	notificationSubContainer: {
		backgroundColor: '#fff',
		borderRadius: 10,
		padding: 10,
	},
>>>>>>> 4e2582932f176892c846e2a9933a2a6bdc1d75e3
});
