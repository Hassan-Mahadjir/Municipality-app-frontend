import React from 'react';
import { StyleSheet, View, StatusBar, FlatList } from 'react-native';
import Header from '@/components/services/Header';
import HealthServicesComponent from '@/components/services/HealthServicesComponent';
import { useTranslation } from 'react-i18next';
import { router } from 'expo-router';
import { scale, verticalScale } from 'react-native-size-matters';

const MunicipalityIndex = () => {
	const { t } = useTranslation();

	const sectionData = [
		{
			image:
				'https://www.kibrispostasi.com/imagecache/newsimage/news/g/ga/gazimausa-belediyesi_1582908935.jpg',
			sectionName: t('municipalityDepartments'),
			pageName: 'municipalDepartment',
		},
		{
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVS3YTdP5UiK6Tpuqk8VDKiyGz12a1fd2wg&s',
			sectionName: t('contactInformation'),
			pageName: 'contactInfo',
		},
		{
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDBV0NfJikz6mU0HbEFt6_aywequJEDwp49g&s',
			sectionName: t('history'),
			pageName: 'history',
		},
	];
	return (
		<View style={styles.container}>
			<StatusBar barStyle={'dark-content'} />
			<Header
				title={t('aboutMunicipality')} // Translated title
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

export default MunicipalityIndex;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	header: {
		height: verticalScale(200),
		justifyContent: 'center',
		alignItems: 'center',
	},
	healthServiceComponent: {
		margin: scale(10),
		padding: scale(15),
	},
});
