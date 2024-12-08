import { View, FlatList, RefreshControl } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import GatherPointCard from '@/components/services/GatherPointCard';
import { scale } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import { useDisaterPoints } from '@/services/api/community';
import Loading from '@/components/Loading';

const disasterPoint = () => {
	const { t, i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();

	const { disasterPointData, isFetching, refetch, isLoading } =
		useDisaterPoints();
	const pointsInfo = disasterPointData?.data.data || [];

	// Pull-to-refresh handler
	const onRefresh = async () => {
		await refetch();
	};

	return (
		<View style={{ flex: 1 }}>
			<Stack.Screen options={{ title: t('disasterGatheringPoints') }} />
			{isLoading ? (
				<Loading />
			) : (
				<FlatList
					data={pointsInfo}
					refreshControl={
						<RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
					}
					contentContainerStyle={{ margin: scale(5), padding: scale(10) }}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => (
						<GatherPointCard
							pointNumber={item.id}
							location={
								item.language === lang
									? item.location
									: item.translations.find(
											(translation) => translation.language === lang
									  )?.location || item.location
							}
							capacity={item.capacity}
						/>
					)}
				/>
			)}
		</View>
	);
};

export default disasterPoint;
