import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, StatusBar } from 'react-native';
import SearchField from '@/components/services/Search';
import HealthItems from '@/components/services/HealthItems';
import PharmacyCard from '@/components/services/PharmacyCard';
import { useTranslation } from 'react-i18next';
import { Stack, router } from 'expo-router';
import { COLORS } from '@/constants/Colors';
import { scale, verticalScale } from 'react-native-size-matters';
import { PharmacyValues } from '@/types/health.type';
import { usePharmacy } from '@/services/api/health';

const PharmacyScreen = () => {
	const { t } = useTranslation();
	const Pharmacies = t('Pharmacies');
	const searchbypharmacyname = t('searchbypharmacyname');
	const openthisweekend = t('openthisweekend');
	const { i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();
	const { pharmacyData, isLoading } = usePharmacy();
	const pharmacies = pharmacyData?.data.data || []; // Ensure a fallback to an empty array
	const [searchQuery, setSearchQuery] = useState('');
	const [filteredPharmacies, setFilteredPharmacies] =
		useState<PharmacyValues[]>(pharmacies);
	const noResultFound = t('noResultFound');

	// Filter pharmacies based on search query
	const handleSearch = (text: string) => {
		setSearchQuery(text);
		if (text.trim() === '') {
			setFilteredPharmacies(pharmacies); // Reset to original data
		} else {
			setFilteredPharmacies(
				pharmacies.filter((pharmacy) =>
					pharmacy.name.toLowerCase().includes(text.toLowerCase())
				)
			);
		}
	};

	const renderItem = ({ item }: { item: PharmacyValues }) => (
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
		<View style={styles.container}>
			<StatusBar barStyle={'dark-content'} />
			<Stack.Screen options={{ title: Pharmacies }} />
			<SearchField
				placeholder={searchbypharmacyname}
				onChangeText={handleSearch} // Pass the handler here
			/>
			<ScrollView contentContainerStyle={styles.contentContainer}>
				<Text style={styles.openThisWeekendText}>{openthisweekend}</Text>
				<PharmacyCard />
				<Text style={styles.title}>{Pharmacies}</Text>
				<View style={styles.list}>
					{filteredPharmacies.length > 0 ? (
						filteredPharmacies.map((item) => (
							<View key={item.id}>{renderItem({ item })}</View>
						))
					) : (
						<Text style={styles.noResultsText}>{noResultFound}</Text>
					)}
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contentContainer: {
		margin: scale(5),
	},
	openThisWeekendText: {
		fontSize: scale(17),
		marginTop: verticalScale(10),
		marginBottom: verticalScale(6),
		color: COLORS.primary,
		fontWeight: 'bold',
		marginLeft: scale(2),
	},
	title: {
		fontSize: scale(19),
		color: COLORS.primary,
		marginTop: verticalScale(10),
		marginBottom: verticalScale(3),
		marginLeft: scale(2),
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

export default PharmacyScreen;
