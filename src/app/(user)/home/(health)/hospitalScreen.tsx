import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	StatusBar,
	FlatList,
	RefreshControl,
} from 'react-native';
import SearchField from '@/components/services/Search';
import HealthItems from '@/components/services/HealthItems';
import { router, Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { COLORS } from '@/constants/Colors';
import { scale, verticalScale } from 'react-native-size-matters';
import { useHospital } from '@/services/api/health';
import { HospitalValues } from '@/types/health.type';

const hospitalScreen = () => {
	const { i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();
	const { t } = useTranslation();
	const { hospitalData, refetch, isFetching, isLoading } = useHospital();
	const hospitals = hospitalData?.data.data || [];

	const Hospitals = t('Hospitals');
	const searchbyhospitalname = t('searchbyhospitalname');
	const noResultFound = t('noResultFound');

	const [searchQuery, setSearchQuery] = useState('');
	const [filteredHospitals, setFilteredHospitals] =
		useState<HospitalValues[]>(hospitals);

	// Update filtered hospitals whenever data or search query changes
	useEffect(() => {
		if (searchQuery.trim() === '') {
			setFilteredHospitals(hospitals);
		} else {
			setFilteredHospitals(
				hospitals.filter((hospital) =>
					hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
				)
			);
		}
	}, [hospitals, searchQuery]);

	// Pull-to-refresh handler
	const onRefresh = async () => {
		await refetch();
	};

	const renderItem = ({ item }: { item: HospitalValues }) => (
		<HealthItems
			name={item.name}
			location={
				item.language === lang
					? item.location
					: item.translations.find(
							(translation) => translation.language === lang
					  )?.location || item.location
			}
			onSeeLocation={() => router.push(`/(user)/home/(health)/${item.id}`)}
			imageUri={item.imageUrl}
		/>
	);

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<View style={styles.container}>
				<StatusBar barStyle='default' />
				<Stack.Screen options={{ title: Hospitals }} />
				<SearchField
					placeholder={searchbyhospitalname}
					onChangeText={setSearchQuery}
				/>
				<FlatList
					data={filteredHospitals}
					keyExtractor={(item) => item.id.toString()}
					refreshControl={
						<RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
					}
					renderItem={renderItem}
					contentContainerStyle={styles.contentContainer}
					ListEmptyComponent={
						isLoading ? null : (
							<Text style={styles.noResultsText}>
								{searchQuery.trim() ? noResultFound : 'No hospitals found.'}
							</Text>
						)
					}
				/>
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
	noResultsText: {
		fontSize: scale(16),
		color: COLORS.secondary,
		textAlign: 'center',
		marginTop: verticalScale(10),
	},
});
