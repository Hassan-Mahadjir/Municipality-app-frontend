import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	ScrollView,
	StatusBar,
	FlatList,
} from 'react-native';
import SearchField from '@/components/services/Search';
import HealthItems from '@/components/services/HealthItems';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { COLORS } from '@/constants/Colors';
import { router } from 'expo-router';
import { scale, verticalScale } from 'react-native-size-matters';
import hospitals from '@/assets/data/hospitals.json';

const hospitalScreen = () => {
	const { t } = useTranslation();
	const Hospitals = t('Hospitals');
	const searchbyhospitalname = t('searchbyhospitalname');

	const renderItem = ({ item }: { item: (typeof hospitals)[0] }) => (
		<HealthItems
			name={t(item.name)}
			location={t(item.location)}
			onSeeLocation={() => router.push(`/(user)/home/(health)/${item.onPress}`)}
			imageUri={item.imageUri}
		/>
	);

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<View style={styles.container}>
				<StatusBar barStyle={'dark-content'} />
				<Stack.Screen options={{ title: Hospitals }} />
				<SearchField
					placeholder={searchbyhospitalname}
					onChangeText={(text) => console.log('Search text:', text)}
				/>
				<ScrollView contentContainerStyle={styles.contentContainer}>
					<Text style={styles.title}>{Hospitals}</Text>
					<FlatList
						data={hospitals}
						renderItem={renderItem}
						keyExtractor={(item) => item.name}
						contentContainerStyle={styles.list}
					/>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default hospitalScreen;

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
	},
	container: {
		flex: 1,
		paddingBottom: verticalScale(60),
	},
	contentContainer: {
		padding: scale(10),
	},
	title: {
		fontSize: scale(19),
		color: COLORS.primary,
		marginTop: verticalScale(7),
		marginBottom: verticalScale(3),
		marginLeft: scale(8),
	},
	list: {
		flexGrow: 1,
		justifyContent: 'center',
	},
});
