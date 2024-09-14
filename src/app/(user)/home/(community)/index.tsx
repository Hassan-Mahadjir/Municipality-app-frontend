import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '@/components/services/Header';
import { router } from 'expo-router';
import HealthServicesComponent from '@/components/services/HealthServicesComponent';
import { verticalScale } from 'react-native-size-matters';
const sectionData = [
	{
		image:
			'https://www.shutterstock.com/image-photo/men-who-dispose-rubbish-that-260nw-1579447720.jpg',
		sectionName: 'Waste Collection',
		pageName: 'wasteCollection',
	},
	{
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopTRgvWtY22LFQp-BszFAYlWw84ReD_fZBw&s',
		sectionName: 'Emergency Contacts',
		pageName: 'emergency',
	},
	{
		image:
			'https://www.kibrispostasi.com/imagecache/newsimage/news/g/ga/gazimausa-belediyesi_1582908935.jpg',
		sectionName: 'Municipal Departments',
		pageName: 'municipalDepartment',
	},
	{
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVS3YTdP5UiK6Tpuqk8VDKiyGz12a1fd2wg&s',
		sectionName: 'Contact Information',
		pageName: 'contactInfo',
	},
	{
		image:
			'https://media.istockphoto.com/id/1154370446/photo/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=kkZiaB9Q-GbY5gjf6WWURzEpLzNrpjZp_tn09GB21bI=',
		sectionName: 'Animals',
		pageName: 'animal',
	},
];

const communityIndex = () => {
	return (
		<View style={{ flex: 1 }}>
			<StatusBar barStyle={'dark-content'} />
			<Header
				title='Community'
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
						title={item.sectionName}
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
