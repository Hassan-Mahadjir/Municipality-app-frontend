import { FlatList, RefreshControl, StyleSheet, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { router, Stack } from 'expo-router';
import { scale, verticalScale } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import { useReportedAnimal, useShelters } from '@/services/api/community';

import NewsCategory from '@/components/services/NewsCategory';
import SearchField from '@/components/services/Search';
import HealthItems from '@/components/services/HealthItems';
import AnimalCard from '@/components/services/animalCard';
import { ReportedanimalValues, ShelterValues } from '@/types/community.type';
import { COLORS } from '@/constants/Colors';

const AnimalMain = () => {
	const { t, i18n } = useTranslation();
	const types = [t('shelter'), t('lostFound')];
	const noResultFound = t('noResultFound');
	const lang = i18n.language.toUpperCase();

	const { animalShelterData, isFetching, refetch, isLoading } = useShelters();
	const {
		reportedAnimalData,
		refetchAnimals,
		isFetchingAnimal,
		isLoadingAnimals,
	} = useReportedAnimal();

	const shelterData = animalShelterData?.data.data || [];
	const animalData = reportedAnimalData?.data.data || [];

	const [selectedCategory, setSelectedCategory] = useState(t('lostFound'));
	const filteredData =
		selectedCategory === t('shelter') ? shelterData : animalData;

	const [searchQuery, setSearchQuery] = useState('');
	const [filteredShelters, setFilteredShelters] =
		useState<ShelterValues[]>(shelterData);
	const [filteredAnimals, setFilteredAnimals] =
		useState<ReportedanimalValues[]>(animalData);

	useEffect(() => {
		if (searchQuery.trim() === '') {
			setFilteredShelters(shelterData);
			setFilteredAnimals(animalData);
		} else {
			setFilteredShelters(
				shelterData.filter((shelter) =>
					shelter.name.toLowerCase().includes(searchQuery.toLowerCase())
				)
			);
			setFilteredAnimals(
				animalData.filter((animal) =>
					animal.id.toString().toLowerCase().includes(searchQuery.toLowerCase())
				)
			);
		}
	}, [shelterData, animalData, searchQuery]);

	// Function to render shelter items
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

	// Function to render animal (lost & found) items
	const renderAnimalItem = ({ item }: { item: ReportedanimalValues }) => (
		<View style={styles.itemContainer}>
			<AnimalCard data={item} />
		</View>
	);

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: t('animalService') }} />
			{selectedCategory === t('shelter') ? (
				<FlatList<ShelterValues>
					key='shelter'
					data={filteredShelters}
					refreshControl={
						<RefreshControl
							refreshing={isFetching}
							onRefresh={() => refetch()}
						/>
					}
					ListHeaderComponent={
						<>
							<FlatList
								data={types}
								horizontal
								keyExtractor={(item) => item}
								style={styles.categoryList}
								contentContainerStyle={styles.categoryContainer}
								showsHorizontalScrollIndicator={false}
								renderItem={({ item }) => (
									<NewsCategory
										item={item}
										selectedCategory={selectedCategory}
										setSelectedCategory={setSelectedCategory}
									/>
								)}
							/>
							<SearchField
								placeholder={t('searchShelter')}
								onChangeText={setSearchQuery}
							/>
						</>
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
							<Text
								style={{
									fontSize: scale(16),
									color: COLORS.secondary,
									textAlign: 'center',
									marginTop: verticalScale(10),
								}}
							>
								{searchQuery.trim() ? noResultFound : 'No shelters found.'}
							</Text>
						)
					}
				/>
			) : (
				<FlatList<ReportedanimalValues>
					key='lostFound'
					data={filteredAnimals}
					refreshControl={
						<RefreshControl
							refreshing={isFetchingAnimal}
							onRefresh={() => refetchAnimals()}
						/>
					}
					ListHeaderComponent={
						<>
							<FlatList
								data={types}
								horizontal
								keyExtractor={(item) => item}
								style={styles.categoryList}
								contentContainerStyle={styles.categoryContainer}
								showsHorizontalScrollIndicator={false}
								renderItem={({ item }) => (
									<NewsCategory
										item={item}
										selectedCategory={selectedCategory}
										setSelectedCategory={setSelectedCategory}
									/>
								)}
							/>
							<SearchField
								placeholder={t('searchAnimal')}
								onChangeText={setSearchQuery}
							/>
						</>
					}
					renderItem={renderAnimalItem}
					numColumns={2}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{
						gap: scale(10),
						paddingBottom: verticalScale(200),
					}}
					ListEmptyComponent={
						isLoading ? null : (
							<Text
								style={{
									fontSize: scale(16),
									color: COLORS.secondary,
									textAlign: 'center',
									marginTop: verticalScale(10),
								}}
							>
								{searchQuery.trim()
									? noResultFound
									: 'No reported animal found.'}
							</Text>
						)
					}
				/>
			)}
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
	categoryList: {
		marginVertical: verticalScale(10),
	},
	categoryContainer: {
		gap: 5,
	},
});

export default AnimalMain;
