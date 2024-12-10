import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Card from './Card';
import { scale, verticalScale } from 'react-native-size-matters';
import { useGetUserAppointment } from '@/services/api/appointmnet';
import { useProfile } from '@/services/api/profile';
import { useTranslation } from 'react-i18next';
import { userAppointmentValues } from '@/types/appointment.type';
const appointments = [
	{
		id: 1,
		time: '10:30Am',
		date: '20/09/2024',
		with: 'mayor',
		status: 'accepted',
	},
	{
		id: 2,
		time: '10:30Am',
		date: '20/09/2024',
		with: 'mayor',
		status: 'accepted',
	},
];
const MyAppointment = () => {
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
				(lang === 'EN' && appointment.status === 'On hold') ||
				(lang === 'TR' && appointment.status === 'Beklemede')
			);
		} else {
			// If the language does not match, check the translations
			const translation = appointment.translations.find(
				(t) => t.language === lang
			);
			return (
				(lang === 'EN' && translation?.status === 'On hold') ||
				(lang === 'TR' && translation?.status === 'Beklemede')
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

export default MyAppointment;

const styles = StyleSheet.create({});
