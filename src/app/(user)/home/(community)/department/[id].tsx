import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import Header from '@/components/services/Header';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { COLORS } from '@/constants/Colors';

const departmentDetails = () => {
	const { id } = useLocalSearchParams();
	return (
		<View>
			<Header
				title={'Public Relation'}
				backgroundImage={{
					uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzbQbJsnJnx5nbsinY52c6Mb9D0HbS16ooPQ&s',
				}}
				onBackPress={() => router.back()}
			/>

			<View style={{ margin: scale(10) }}>
				<Text style={styles.reason}>
					Head of department:{' '}
					<Text style={{ textAlign: 'justify', color: '#000' }}>
						Nour Barakat
					</Text>
				</Text>

				<Text style={styles.reason}>Description: </Text>
				<Text style={{ textAlign: 'justify', marginBottom: scale(5) }}>
					orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
					ea commodo consequat.
				</Text>

				<Text style={styles.reason}>Contact Inofomatin: </Text>
				<Text style={{ textAlign: 'justify' }}>Phone: +90 533 888 902</Text>
				<Text style={{ textAlign: 'justify' }}>
					Email: Hm.mahadjir@gmail.com
				</Text>
			</View>
		</View>
	);
};

export default departmentDetails;

const styles = StyleSheet.create({
	subject: {
		fontWeight: 'bold',
		fontSize: moderateScale(16),
		textAlign: 'justify',
	},
	paragraph: {
		marginBottom: verticalScale(10),
		fontSize: moderateScale(14),
		lineHeight: verticalScale(22),
		textAlign: 'justify',
	},
	keyDiscription: {
		fontSize: moderateScale(24),
		fontWeight: '700',
		marginBottom: verticalScale(8),
	},
	reason: {
		color: COLORS.primary,
		marginBottom: verticalScale(3),
	},
	getCar: {
		textAlign: 'center',
		color: COLORS.primary,
		marginTop: verticalScale(5),
	},
});
