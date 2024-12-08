import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { router, Stack } from 'expo-router';
import DepartmentCard from '@/components/services/DepartmentCard';
import { useTranslation } from 'react-i18next';
import { useDepartment } from '@/services/api/municipality';

const municipalDepartment = () => {
	const { t, i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();
	const { departmentData, isFetching, refetch } = useDepartment();

	const departments = departmentData?.data.data || [];

	return (
		<View>
			<Stack.Screen options={{ title: t('municipalityDepartments') }} />
			<FlatList
				data={departments}
				refreshControl={
					<RefreshControl refreshing={isFetching} onRefresh={() => refetch()} />
				}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<DepartmentCard
						imageUrl={item.imageUrl}
						departmentName={
							item.language === lang
								? item.name
								: item.translations.find(
										(translation) => translation.language === lang
								  )?.name || item.name
						}
						onSeeDetails={() => router.push(`./department/${item.id}`)}
					/>
				)}
			/>
		</View>
	);
};

export default municipalDepartment;

const styles = StyleSheet.create({});
