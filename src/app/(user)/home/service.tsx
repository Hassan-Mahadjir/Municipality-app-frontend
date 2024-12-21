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
import { useTranslation } from 'react-i18next';

export default function service() {
	const { servisesData } = useService();
	const services = servisesData?.data.data;
	const { t, i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();
	const back_label = t('back');
	const services_lable = t('services');
	return (
		<View style={{ marginLeft: 10, marginTop: 10 }}>
			<Stack.Screen
				options={{
					headerShown: true,
					title: services_lable,
					headerTintColor: '#fff',
					headerStyle: { backgroundColor: COLORS.secondary },
					headerTitleAlign: 'center',
					headerBackTitle: back_label,
				}}
			/>
			<FlatList
				data={services}
				contentContainerStyle={{ gap: 6 }}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item, index }) => (
					<TouchableOpacity
						onPress={() => router.push(`./(${item.name.toLocaleLowerCase()})`)}
					>
						<View style={style.serviceContainer}>
							<Image
								source={{ uri: item.imageUrl }}
								style={style.serviceImage}
							/>

							<Text style={style.servicesName}>
								{item.language === lang
									? item.name
									: item.translations.find(
											(translation) => translation.language === lang
									  )?.name || item.name}{' '}
								{services_lable}
							</Text>
						</View>
					</TouchableOpacity>
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
		color: COLORS.secondary,
		textAlign: 'center',
	},
});
