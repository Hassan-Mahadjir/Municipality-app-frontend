import {
	View,
	Text,
	Image,
	TouchableOpacity,
	FlatList,
	StyleSheet,
} from 'react-native';
import React from 'react';
import { router, Stack } from 'expo-router';
import { COLORS } from '@/constants/Colors';
import { useService } from '@/services/api/home';

export default function service() {
	const { servisesData } = useService();
	const services = servisesData?.data.data;
	return (
		<View style={{ marginLeft: 10, marginTop: 10 }}>
			<Stack.Screen
				options={{
					headerShown: true,
					title: 'Services',
					headerTintColor: '#fff',
					headerStyle: { backgroundColor: COLORS.secondary },
					headerTitleAlign: 'center',
				}}
			/>
			<FlatList
				data={services}
				contentContainerStyle={{ gap: 6 }}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item, index }) => (
					<View style={style.serviceContainer}>
						<Image
							source={{ uri: 'https://picsum.photos/150/200' }}
							style={style.serviceImage}
						/>
						<TouchableOpacity
							onPress={() =>
								router.push(`./(${item.name.toLocaleLowerCase()})`)
							}
						>
							<Text style={style.servicesName}>{item.name} Services</Text>
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
	);
}

const style = StyleSheet.create({
	serviceImage: {
		height: 80,
		width: 80,
		borderRadius: 20,
	},
	serviceContainer: {
		display: 'flex',
		flexDirection: 'row',
		gap: 50,
		alignItems: 'center',
		backgroundColor: '#fff',
		width: '95%',
		borderRadius: 10,
		padding: 10,
		margin: 5,
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.17,
		shadowRadius: 2.54,
		elevation: 3,
	},
	servicesName: {
		fontSize: 20,
		color: '#F64D00',
		textAlign: 'center',
	},
});
