import React, { useState, useEffect } from 'react';
import { View, FlatList, RefreshControl, Text, StyleSheet } from 'react-native';
import { useShelters } from '@/services/api/community';
import { ShelterValues } from '@/types/community.type';
import { useTranslation } from 'react-i18next';
import { scale, verticalScale } from 'react-native-size-matters';
import { COLORS } from '@/constants/Colors';
import HealthItems from '@/components/services/HealthItems';
import SearchField from '@/components/services/Search';

const Shelter = () => {
	const { t, i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();
	const noResultFound = t('noResultFound');

	const { animalShelterData, isFetching, refetch, isLoading } = useShelters();
	const shelterData = animalShelterData?.data.data || [];

	const [searchQuery, setSearchQuery] = useState('');
	const [filteredShelters, setFilteredShelters] =
		useState<ShelterValues[]>(shelterData);

	useEffect(() => {
		if (searchQuery.trim() === '') {
			setFilteredShelters(shelterData);
		} else {
			setFilteredShelters(
				shelterData.filter((shelter) =>
					shelter.name.toLowerCase().includes(searchQuery.toLowerCase())
				)
			);
		}
	}, [shelterData, searchQuery]);

	const renderShelterItem = ({ item }: { item: ShelterValues }) => (
		<View style={styles.itemContainer}>
			<HealthItems
				name={item.name}
				location={
					item.language === lang
						? item.location
						: item.translations.find(
								(translation) => translation.language === lang
						  )?.location || item.location
				}
				onSeeLocation={() => {}}
				imageUri={item.logo}
			/>
		</View>
	);

	return (
		<View style={styles.container}>
			<SearchField
				placeholder={t('searchShelter')}
				onChangeText={setSearchQuery}
			/>
			<FlatList<ShelterValues>
				key='shelter'
				data={filteredShelters}
				refreshControl={
					<RefreshControl refreshing={isFetching} onRefresh={() => refetch()} />
				}
				renderItem={renderShelterItem}
				numColumns={1}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					gap: scale(5),
					paddingBottom: verticalScale(200),
				}}
				ListEmptyComponent={
					isLoading ? null : (
						<Text style={styles.noResultText}>
							{searchQuery.trim() ? noResultFound : 'No shelters found.'}
						</Text>
					)
				}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: scale(10),
	},
	itemContainer: {
		margin: scale(5),
		flex: 1,
	},
	noResultText: {
		fontSize: scale(16),
		color: COLORS.secondary,
		textAlign: 'center',
		marginTop: verticalScale(10),
	},
});

export default Shelter;
