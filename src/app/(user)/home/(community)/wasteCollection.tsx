import {
	FlatList,
	RefreshControl,
	StyleSheet,
	Text,
	View,
	ActivityIndicator,
} from 'react-native';
import React, { useState, useMemo } from 'react';
import waste from '@/assets/data/waste.json';
import { Stack } from 'expo-router';
import { scale, verticalScale } from 'react-native-size-matters';
import NewsCategory from '@/components/services/NewsCategory';
import WasteCard from '@/components/services/WasteCard';
import { useTranslation } from 'react-i18next';
import { useWasteSchedule } from '@/services/api/community';
import { WasteSheduleValues } from '@/types/community.type';
import { COLORS } from '@/constants/Colors';
import Loading from '@/components/Loading';

const wasteCollection = () => {
	const { t, i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();

	const categories = {
		all: t('all'),
		organic: t('organic'),
		recyclable: t('recyclable'),
		nonRecyclable: t('nonRecyclable'),
	};
	const types = Object.values(categories);
	const [selectedCategory, setSelectedCategory] = useState(t('all'));

	const { wasteSchduleData, isLoading, refetch, isFetching } =
		useWasteSchedule();
	const data: WasteSheduleValues[] = wasteSchduleData?.data.data || [];

	// Memoize the formatted waste schedule data
	const formatedWasteSchedule = useMemo(() => {
		return data.flatMap((item) =>
			item.sechdules.map((schedule) => ({
				id: schedule.id,
				day:
					item.language === lang
						? schedule.day
						: schedule.translations.find(
								(translation) => translation.language === lang
						  )?.day || schedule.day,
				startTime: schedule.startTime,
				endTime: schedule.endTime,
				type:
					item.language === lang
						? item.type
						: item.translations.find(
								(translation) => translation.language === lang
						  )?.type || item.type,
			}))
		);
	}, [data, lang]);

	// Pull-to-refresh handler
	const onRefresh = async () => {
		await refetch();
	};

	const filteredData = useMemo(() => {
		return selectedCategory === t('all')
			? formatedWasteSchedule
			: formatedWasteSchedule.filter(
					(item) =>
						item &&
						(selectedCategory.toLowerCase() === t('all').toLowerCase() ||
							item.type.toLowerCase() === selectedCategory.toLowerCase())
			  );
	}, [selectedCategory, formatedWasteSchedule, t]);

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: t('wasteCollection') }} />

			{isLoading ? (
				<Loading />
			) : (
				<FlatList
					data={filteredData}
					refreshControl={
						<RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
					}
					ListHeaderComponent={
						<FlatList
							data={types}
							horizontal
							keyExtractor={(item) => item}
							style={{ marginVertical: verticalScale(10) }}
							contentContainerStyle={{ gap: 5 }}
							showsHorizontalScrollIndicator={false}
							renderItem={({ item }) => (
								<NewsCategory
									item={item}
									selectedCategory={selectedCategory}
									setSelectedCategory={setSelectedCategory}
								/>
							)}
						/>
					}
					renderItem={({ item }) => <WasteCard data={item} />}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{
						gap: scale(10),
						paddingBottom: verticalScale(200),
					}}
				/>
			)}
		</View>
	);
};

export default wasteCollection;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: '#FFFFFF',
	},
	loadingIndicator: {
		marginTop: verticalScale(50),
	},
});
