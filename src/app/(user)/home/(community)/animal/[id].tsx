import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import Header from '@/components/services/Header';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { COLORS } from '@/constants/Colors';
import SubmitButtonComponent from '@/components/SubmitButton';

const animalDetails = () => {
	const { id } = useLocalSearchParams();
	return (
		<View>
			<Header
				title={''}
				backgroundImage={{
					uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtg6SNRxoTBGTHMxnV59khl2t1dAS0oynUMg&s',
				}}
				onBackPress={() => router.back()}
			/>

			<View style={{ margin: scale(10) }}>
				<Text style={[styles.subject, { textAlign: 'center' }]}>
					{`Ainmal no: ${id}`}
				</Text>

				<View
					style={{
						flexDirection: 'row',
						marginTop: verticalScale(10),
						justifyContent: 'space-between',
					}}
				>
					<View style={{ flexDirection: 'row' }}>
						<EvilIcons name='location' size={24} color={COLORS.primary} />
						<Text style={{ color: COLORS.primary }}>FAMAGUSTA</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<AntDesign name='questioncircleo' size={20} color={COLORS.gray} />
						<Text style={{ color: COLORS.gray, marginLeft: scale(5) }}>
							Lost
						</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<EvilIcons name='clock' size={24} color={COLORS.gray} />
						<Text style={{ color: COLORS.gray }}>10min ago</Text>
					</View>
				</View>
			</View>

			<View
				style={{ borderBottomWidth: 2, borderBottomColor: COLORS.gray }}
			></View>

			<View style={{ margin: scale(10) }}>
				<Text style={styles.keyDiscription}>XXXX Red car</Text>
				<Text style={styles.reason}>Description: </Text>
				<Text style={{ textAlign: 'justify' }}>
					orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
					ea commodo consequat.
				</Text>
				<Text
					style={{ marginVertical: verticalScale(20), color: COLORS.primary }}
				>
					Contact Information:{' '}
					<Text style={{ color: '#000' }}>+90 533 888 902</Text>
				</Text>

				<SubmitButtonComponent
					title='Change Status'
					fullWidth
					onPress={() => {}}
				/>
			</View>
		</View>
	);
};

export default animalDetails;

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
		marginBottom: verticalScale(5),
	},
	getCar: {
		textAlign: 'center',
		color: COLORS.primary,
		marginTop: verticalScale(5),
	},
});
