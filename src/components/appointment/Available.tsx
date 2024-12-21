import {
	StyleSheet,
	Text,
	View,
	Image,
	FlatList,
	TouchableOpacity,
	ScrollView,
	RefreshControl,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { COLORS } from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import SubmitButtonComponent from '../SubmitButton';
import InputComponent from './inputComponent';
import { FormProvider, useForm } from 'react-hook-form';
import { appointment } from '@/types/appointmnet-report';
import { useTranslation } from 'react-i18next';
import {
	postAppointment,
	useGetResposible,
	useGetScheduleSlots,
} from '@/services/api/appointmnet';
import {
	createAppointmentValues,
	scheduleSlotsValues,
} from '@/types/appointment.type';
import { useProfile } from '@/services/api/profile';
import Loading from '../Loading';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Available = () => {
	const { i18n, t } = useTranslation();
	const lang = i18n.language.toUpperCase();
	const [selectedDay, setSelectedDay] = useState<string>('Monday');
	const [selectedTime, setSelectedTime] = useState<string>('00:00');
	const [selectedDate, setSelectedDate] = useState<string>('');
	const { profileData } = useProfile();
	const userId = profileData?.data.data.user.id;
	const { resposibleData, refetch: refetchResponsible } = useGetResposible(16);
	const {
		scheduleData,
		isLoading,
		isFetching,
		refetch: refetchSlots,
	} = useGetScheduleSlots();
	const resposible = resposibleData?.data.data;
	const slots = scheduleData?.data.data || [];
	// Fetch data when the component mounts
	useEffect(() => {
		refetchResponsible();
		refetchSlots();
	}, [refetchResponsible, refetchSlots]);

	const reformatData = (data: scheduleSlotsValues[]) => {
		return data.flatMap((dayItem) =>
			dayItem.availabilities.map((availability, index) => ({
				id: availability.id, // or `index + 1` if you prefer a sequential ID
				startTime: availability.startTime,
				date: dayItem.date,
				day:
					dayItem.language === lang
						? dayItem.day
						: dayItem.translations.find(
								(translation) => translation.language === lang
						  )?.day || dayItem.day,
			}))
		);
	};

	const days = [
		t('monday'),
		t('tuesday'),
		t('wednesday'),
		t('thursday'),
		t('friday'),
		t('saturday'),
		t('sunday'),
	];

	const formattedSlots = reformatData(slots);
	const filtertime = formattedSlots.filter((item) => item.day === selectedDay);

	const { mutateAppointment, isPending } = postAppointment(
		userId ? +userId : 0
	);

	const methods = useForm<createAppointmentValues>({
		defaultValues: {
			purpose: '',
		},
	});

	const onSubmit = (inputData: createAppointmentValues) => {
		console.log(
			'Appointment form: ',
			inputData,
			selectedDay,
			selectedTime,
			selectedDate
		);
		const data: createAppointmentValues = {
			purpose: inputData.purpose,
			language: lang,
			appointmentWith: `${resposible?.profile.firstName} ${resposible?.profile.lastName}`,
			date: selectedDate,
			startTime: selectedTime,
		};
		console.log(data);
		mutateAppointment(data);
	};
	if (!resposible) {
		return <Loading />;
	}

	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
		>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ flexDirection: 'row' }}>
					<LinearGradient
						colors={['rgba(224,224,224,0.9)', 'rgba(255,255,255,0.9)']}
						style={styles.linearGradientSyley}
						start={{ x: 0, y: 1 }}
						end={{ x: 1, y: 0 }}
					/>
					<View style={styles.container}>
						<Text style={styles.mayor}>{t('mayor')}</Text>
						<Text style={styles.mayorName}>
							{resposible?.profile.firstName} {resposible?.profile.lastName}
						</Text>
					</View>
					<Image
						source={{
							uri: 'https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png',
						}}
						style={{
							height: verticalScale(130),
							width: scale(150),
							marginLeft: scale(0),
						}}
						resizeMode='contain'
					/>
				</View>
				<View style={styles.container}>
					<Text style={styles.description}>{t('description')}</Text>
					<Text style={{ textAlign: 'justify', marginTop: verticalScale(5) }}>
						{resposible?.profile.language === lang
							? resposible.profile.description
									.split('. ')
									.map((sentence, index) => (
										<Text key={index}>
											{sentence.trim()}
											{index <
											resposible.profile.description.split('. ').length - 1
												? '.'
												: ''}
											{'\n'}
										</Text>
									))
							: resposible?.profile.translation.description
									.split('. ')
									.map((sentence, index) => (
										<Text key={index}>
											{sentence.trim()}
											{index <
											resposible.profile.translation.description.split('. ')
												.length -
												1
												? '.'
												: ''}
											{'\n\n'}
										</Text>
									))}
					</Text>

					<Text style={[styles.description, { marginTop: verticalScale(5) }]}>
						{t('email')}:{' '}
						<Text style={{ color: '#000' }}>{resposible?.email}</Text>
					</Text>

					<View style={{ marginVertical: verticalScale(10) }}>
						<Text style={styles.schedule}>{t('scheduleDay')}</Text>
					</View>

					<FlatList
						data={days}
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						pagingEnabled={false}
						contentContainerStyle={{ gap: scale(5) }}
						renderItem={({ item }) => (
							<View
								style={[
									styles.scheduleContainer,
									selectedDay === item && {
										backgroundColor: COLORS.primary,
									},
								]}
							>
								<TouchableOpacity onPress={() => setSelectedDay(item)}>
									<Text
										style={[
											styles.scheduleText,
											selectedDay === item && {
												color: '#fff',
											},
										]}
									>
										{item}
									</Text>
								</TouchableOpacity>
							</View>
						)}
					/>

					<View style={{ marginVertical: verticalScale(10) }}>
						<Text style={styles.schedule}>{t('scheduleTime')}</Text>
					</View>

					<FlatList
						data={filtertime}
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						pagingEnabled={false}
						contentContainerStyle={{ gap: scale(5) }}
						renderItem={({ item }) => (
							<View
								style={[
									styles.scheduleContainer,
									selectedTime === item.startTime && {
										backgroundColor: COLORS.primary,
									},
								]}
							>
								<TouchableOpacity
									onPress={() => {
										setSelectedTime(item.startTime);
										setSelectedDate(item.date);
									}}
								>
									<Text
										style={[
											styles.scheduleText,
											selectedTime === item.startTime && {
												color: '#fff',
											},
										]}
									>
										{item.startTime}
									</Text>
								</TouchableOpacity>
							</View>
						)}
					/>

					<View style={{ marginVertical: verticalScale(10) }}>
						<Text style={styles.schedule}>{t('purpose')}</Text>
					</View>
					{isPending ? (
						<View
							style={{
								flex: 1,
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Loading />
						</View>
					) : (
						<KeyboardAwareScrollView>
							<FormProvider {...methods}>
								<InputComponent
									name='purpose'
									text=''
									multiline={true}
									numberOfLines={4}
									height={100}
									inputType='purpose'
									returnKeyType='done'
								/>

								<SubmitButtonComponent
									title='Make Appointment'
									fullWidth
									onPress={methods.handleSubmit(onSubmit)}
								/>
							</FormProvider>
						</KeyboardAwareScrollView>
					)}
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export default Available;

const styles = StyleSheet.create({
	container: {
		margin: scale(10),
	},
	mayor: {
		fontSize: moderateScale(18),
		fontWeight: '800',
	},
	mayorName: {
		marginVertical: verticalScale(5),
		fontSize: moderateScale(16),
		color: COLORS.primary,
	},
	linearGradientSyley: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
	},
	description: {
		fontSize: moderateScale(14),
		color: COLORS.primary,
	},
	schedule: {
		fontSize: moderateScale(16),
		fontWeight: 'bold',
		color: COLORS.primary,
	},
	scheduleContainer: {
		borderRadius: scale(10),
		paddingHorizontal: scale(15),
		borderColor: COLORS.primary,
		borderWidth: scale(1),
		paddingVertical: verticalScale(10),
	},
	scheduleText: {
		fontSize: moderateScale(14),
	},
});
