import {
	StyleSheet,
	Text,
	View,
	Image,
	FlatList,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { COLORS } from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import SubmitButtonComponent from '../SubmitButton';
import InputComponent from './inputComponent';
import { FormProvider, useForm } from 'react-hook-form';
import { appointment } from '@/types/appointmnet-report';
const days = ['Mon', 'Tus', 'Wed', 'Thus', 'Fri', 'Sat', 'Sun'];
const times = [
	{ id: 1, time: '10:30AM', day: 'Mon' },
	{ id: 2, time: '11:30AM', day: 'Mon' },
	{ id: 3, time: '11:30AM', day: 'Fri' },
	{ id: 4, time: '12:30AM', day: 'Mon' },
	{ id: 5, time: '01:30AM', day: 'Mon' },
	{ id: 6, time: '02:30AM', day: 'Fri' },
	{ id: 7, time: '03:30AM', day: 'Mon' },
	{ id: 8, time: '02:30AM', day: 'Mon' },
	{ id: 9, time: '03:30PM', day: 'Mon' },
	{ id: 10, time: '02:30PM', day: 'Mon' },
];
const Available = () => {
	const [selectedDay, setSelectedDay] = useState<string>('Mon');
	const [selectedTime, setSelectedTime] = useState<string>();

	const filtertime = times.filter((item) => item.day === selectedDay);

	const methods = useForm<appointment>({
		defaultValues: {
			purpose: '',
		},
	});

	return (
		<ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
			<View style={{ flexDirection: 'row' }}>
				<LinearGradient
					colors={['rgba(224,224,224,0.9)', 'rgba(255,255,255,0.9)']}
					style={styles.linearGradientSyley}
					start={{ x: 0, y: 1 }}
					end={{ x: 1, y: 0 }}
				/>
				<View style={styles.container}>
					<Text style={styles.mayor}>Mayor of Famagusta</Text>
					<Text style={styles.mayorName}>Mahamat Hassan</Text>
				</View>
				<Image
					source={{
						uri: 'https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png',
					}}
					style={{
						height: verticalScale(130),
						width: scale(150),
						marginLeft: scale(55),
					}}
					resizeMode='contain'
				/>
			</View>
			<View style={styles.container}>
				<Text style={styles.description}>Description</Text>
				<Text style={{ textAlign: 'justify' }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.
				</Text>
				<Text style={[styles.description, { marginTop: verticalScale(5) }]}>
					Email: <Text style={{ color: '#000' }}>hm.mahadjir@gmail.com</Text>
				</Text>

				<View style={{ marginVertical: verticalScale(10) }}>
					<Text style={styles.schedule}>Schedule Day</Text>
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
					<Text style={styles.schedule}>Schedule Time</Text>
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
								selectedTime === item.time && {
									backgroundColor: COLORS.primary,
								},
							]}
						>
							<TouchableOpacity onPress={() => setSelectedTime(item.time)}>
								<Text
									style={[
										styles.scheduleText,
										selectedTime === item.time && {
											color: '#fff',
										},
									]}
								>
									{item.time}
								</Text>
							</TouchableOpacity>
						</View>
					)}
				/>

				<View style={{ marginVertical: verticalScale(10) }}>
					<Text style={styles.schedule}>Purpose of appointment</Text>
				</View>
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
						onPress={() => {}}
					/>
				</FormProvider>
			</View>
		</ScrollView>
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
