import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '@/components/services/Header';
import { router } from 'expo-router';
import HealthServicesComponent from '@/components/services/HealthServicesComponent';
import { verticalScale } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

const communityIndex = () => {
	const { t } = useTranslation();
	const sectionData = [
		{
			image:
				'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendywei-1190298.jpg&fm=jpg',
			sectionName: t('event'),
			pageName: 'event',
		},
		{
			image:
				'https://www.shutterstock.com/image-photo/men-who-dispose-rubbish-that-260nw-1579447720.jpg',
			sectionName: t('WasteCollection'),
			pageName: 'wasteCollection',
		},
		{
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopTRgvWtY22LFQp-BszFAYlWw84ReD_fZBw&s',
			sectionName: t('emergencyContacts'),
			pageName: 'emergency',
		},

		{
			image:
				'https://media.istockphoto.com/id/1154370446/photo/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=kkZiaB9Q-GbY5gjf6WWURzEpLzNrpjZp_tn09GB21bI=',
			sectionName: t('animals'),
			pageName: 'animalMain',
		},
		{
			image:
				'https://thumbs.dreamstime.com/b/fire-assembly-point-sign-gathering-point-signboard-emergency-evacuation-vector-graphic-design-logo-website-social-media-fire-227395003.jpg',
			sectionName: t('disasterGatheringPoints'),
			pageName: 'disasterPoint',
		},
	];
	return (
		<View style={{ flex: 1 }}>
			<StatusBar barStyle={'dark-content'} />
			<Header
				title={t('community')} // Translated title
				backgroundImage={{
					uri: 'https://content.communityjournal.net/content/uploads/20220131085938/IMG_0682.png',
				}}
				onBackPress={() => router.back()}
			/>

			<FlatList
				data={sectionData}
				contentContainerStyle={{ paddingBottom: verticalScale(80) }}
				keyExtractor={(item, index) => index.toString()}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<HealthServicesComponent
						title={t(item.sectionName)} // Translated section name
						backgroundImage={{
							uri: item.image,
						}}
						onPress={() => router.push(`./${item.pageName}`)}
					/>
				)}
			/>
		</View>
	);
};

export default communityIndex;

const styles = StyleSheet.create({});
