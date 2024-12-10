import { View, Text, FlatList, RefreshControl } from 'react-native';
import React from 'react';
import { scale, verticalScale } from 'react-native-size-matters';
import Card from './Card';
import { useTranslation } from 'react-i18next';
import { useProfile } from '@/services/api/profile';
import { useGetUserAppointment } from '@/services/api/appointmnet';

const History = () => {
	const { i18n, t } = useTranslation();
	const lang = i18n.language.toUpperCase();

	const { profileData } = useProfile();
	const userId = profileData?.data.data.user.id;

	const { appointmentData, isFetching, isLoading, refetch } =
		useGetUserAppointment(userId ? +userId : 0);

	const appointments = appointmentData?.data.data || [];
	const filteredAppointments = appointments.filter((appointment) => {
		if (appointment.language === lang) {
			// If the appointment's language matches the selected language
			return (
				(lang === 'EN' && appointment.status === 'Completed') ||
				(lang === 'TR' && appointment.status === 'Tamamlandı')
			);
		} else {
			// If the language does not match, check the translations
			const translation = appointment.translations.find(
				(t) => t.language === lang
			);
			return (
				(lang === 'EN' && translation?.status === 'Completed') ||
				(lang === 'TR' && translation?.status === 'Tamamlandı')
			);
		}
	});

	return (
		<FlatList
			data={filteredAppointments}
			renderItem={({ item }) => <Card data={item} />}
			showsVerticalScrollIndicator={false}
			refreshControl={
				<RefreshControl refreshing={isFetching} onRefresh={() => refetch()} />
			}
			contentContainerStyle={{
				gap: scale(10),
				paddingBottom: verticalScale(200),
				marginTop: verticalScale(20),
			}}
		/>
	);
};

export default History;
