import React from 'react';
import { StyleSheet, View, ScrollView, StatusBar,FlatList } from 'react-native';
import Header from '@/components/services/Header';
import HealthServicesComponent from '@/components/services/HealthServicesComponent';
import { useTranslation } from 'react-i18next';
import { router } from 'expo-router';
import { scale, verticalScale } from 'react-native-size-matters';

const HealthMain = () => {
	const { t } = useTranslation();
	const Health = t('Health');
	const Hospitals = t('Hospitals');
	const Pharmacies = t('Pharmacies');

	return (
		<View style={styles.container}>
			<ScrollView>
				<StatusBar barStyle={'dark-content'} />
				<Header
					title={Health}
					backgroundImage={{
						uri: 'https://th.bing.com/th/id/OIP.scDhVXtpEEcrlMeIhuDKzwHaE8?rs=1&pid=ImgDetMain',
					}}
					onBackPress={() => router.push('/(user)/home')}
				/>
				<HealthServicesComponent
					title={Hospitals}
					backgroundImage={{
						uri: 'https://th.bing.com/th/id/OIP.eEOP-XkPqW-snCoRZPQFqwHaD6?w=734&h=388&rs=1&pid=ImgDetMain',
					}}
					onPress={() => router.push('/(user)/home/(health)/hospitalScreen')}
				/>
				<HealthServicesComponent
					title={Pharmacies}
					backgroundImage={{
						uri: 'https://images.squarespace-cdn.com/content/v1/53cda9a9e4b0f4361f8cc6c9/1407926726645-OPVQZKCJ39ZDFN5N18I9/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Qualified+Pharmacist+Checking+Aged+Care+Medication',
					}}
					onPress={() => router.push('/(user)/home/(health)/pharamcyScreen')}
				/>
			</ScrollView>
			
		</View>
	);
};

export default HealthMain;

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
