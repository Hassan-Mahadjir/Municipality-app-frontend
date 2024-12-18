import React, { useState, useEffect } from 'react';
import { View, FlatList, RefreshControl, Text, StyleSheet } from 'react-native';
import { useReportedAnimal } from '@/services/api/community';
import { ReportedanimalValues } from '@/types/community.type';
import { useTranslation } from 'react-i18next';
import { scale, verticalScale } from 'react-native-size-matters';
import { COLORS } from '@/constants/Colors';
import AnimalCard from '@/components/services/animalCard';
import SearchField from '@/components/services/Search';

const Animal = () => {
	const { t, i18n } = useTranslation();
	const noResultFound = t('noResultFound');

	const {
		reportedAnimalData,
		refetchAnimals,
		isFetchingAnimal,
		isLoadingAnimals,
	} = useReportedAnimal();
	const animalData = reportedAnimalData?.data.data || [];

	const [searchQuery, setSearchQuery] = useState('');
	const [filteredAnimals, setFilteredAnimals] =
		useState<ReportedanimalValues[]>(animalData);

	useEffect(() => {
		if (searchQuery.trim() === '') {
			setFilteredAnimals(animalData);
		} else {
			setFilteredAnimals(
				animalData.filter((animal) =>
					animal.id.toString().toLowerCase().includes(searchQuery.toLowerCase())
				)
			);
		}
	}, [animalData, searchQuery]);

	const renderAnimalItem = ({ item }: { item: ReportedanimalValues }) => (
		<View style={styles.itemContainer}>
			<AnimalCard data={item} />
		</View>
	);

	return (
		<View style={styles.container}>
			<SearchField
				placeholder={t('searchAnimal')}
				onChangeText={setSearchQuery}
			/>
			<FlatList<ReportedanimalValues>
				key='lostFound'
				data={filteredAnimals}
				refreshControl={
					<RefreshControl
						refreshing={isFetchingAnimal}
						onRefresh={() => refetchAnimals()}
					/>
				}
				renderItem={renderAnimalItem}
				numColumns={2}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					gap: scale(10),
					paddingBottom: verticalScale(200),
				}}
				ListEmptyComponent={
					isLoadingAnimals ? null : (
						<Text style={styles.noResultText}>
							{searchQuery.trim() ? noResultFound : 'No reported animal found.'}
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

export default Animal;
