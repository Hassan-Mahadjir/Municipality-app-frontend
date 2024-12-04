import React, { useState } from 'react';
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
import { useHospital } from '@/services/api/health';
import { HospitalValues } from '@/types/health.type';

const hospitalScreen = () => {
	const { t } = useTranslation();
	const Hospitals = t('Hospitals');
	const searchbyhospitalname = t('searchbyhospitalname');
	const { i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();
	const { hospitalData, isLoading } = useHospital();
	const hospitals = hospitalData?.data.data || [];
	const [searchQuery, setSearchQuery] = useState('');
	const [filteredHospitals, setFilteredHospitals] =
		useState<HospitalValues[]>(hospitals);
	const noResultFound = t('noResultFound');

	// Filter hospitals based on search query
	const handleSearch = (text: string) => {
		setSearchQuery(text);
		if (text.trim() === '') {
			setFilteredHospitals(hospitals); // Reset to original data
		} else {
			setFilteredHospitals(
				hospitals.filter((hospital) =>
					hospital.name.toLowerCase().includes(text.toLowerCase())
				)
			);
		}
	};

	const renderItem = ({ item }: { item: HospitalValues }) => (
		<HealthItems
			name={item.name}
			location={
				item.language === lang
					? item.name
					: item.translations.find(
							(translation) => translation.language === lang
					  )?.location || item.name
			}
			onSeeLocation={() => router.push(`/(user)/home/(health)/${item.id}`)}
			imageUri={item.imageUrl}
		/>
	);

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<View style={styles.container}>
				<StatusBar barStyle={'dark-content'} />
				<Stack.Screen options={{ title: Hospitals }} />
				<SearchField
					placeholder={searchbyhospitalname}
					onChangeText={handleSearch}
				/>
				<ScrollView
					style={{ flexGrow: 1 }}
					contentContainerStyle={styles.contentContainer}
				>
					<Text style={styles.title}>{Hospitals}</Text>
					<View style={styles.list}>
						{/* Render filtered hospitals */}
						{filteredHospitals.length > 0 ? (
							filteredHospitals.map((item) => (
								<View key={item.id}>{renderItem({ item })}</View>
							))
						) : (
							<Text style={styles.noResultsText}>{noResultFound}</Text>
						)}
					</View>
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
	noResultsText: {
		color: COLORS.secondary,
		fontSize: scale(16),
		textAlign: 'center',
		marginTop: verticalScale(10),
	},
});
