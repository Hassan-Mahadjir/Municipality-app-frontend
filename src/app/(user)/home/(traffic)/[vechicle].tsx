import {
	View,
	Text,
	StatusBar,
	Image,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import React from 'react';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { COLORS } from '@/constants/Colors';
import { verticalScale, scale, moderateScale } from 'react-native-size-matters';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import SubmitButtonComponent from '@/components/SubmitButton';
import { useTranslation } from 'react-i18next';


const vechicle = () => {
	const { vechicle } = useLocalSearchParams();
	const { t } = useTranslation(); // Access the translation function

	return (
		<View>
			<Stack.Screen
				options={{
					title: `${vechicle}`,
					headerStyle: { backgroundColor: '#fff' },
					headerTintColor: COLORS.primary,
				}}
			/>
			<StatusBar barStyle={'dark-content'} />
			<View>
				<Image
					style={styles.image}
					source={{
						uri: 'https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg',
					}}
				/>
				<View style={styles.line}></View>
				<View style={{ margin: scale(10) }}>
					{/* Translation of text using t() */}
					<Text style={styles.keyDiscription}>{t('XXXX Red Car')}</Text>
					<Text style={styles.reason}>{t('Reason for collecting')}:</Text>
					<Text style={{ textAlign: 'justify' }}>
						{t('Reason random info to change later on.')}
					</Text>
					<Text style={{ marginTop: verticalScale(15), color: COLORS.primary }}>
						{t('Collected Date')}: <Text style={{ color: '#000' }}>12/09/2024</Text>
					</Text>
					<View
						style={{
							flexDirection: 'row',
							marginVertical: verticalScale(10),
							marginLeft: scale(-5),
						}}
					>
						<EvilIcons name='location' size={24} color={COLORS.primary} />
						{/* Location info translated */}
						<Text>{t('Famagusta, EMU Maingate')}</Text>
					</View>

					<Text style={{ color: COLORS.primary, marginBottom: verticalScale(15) }}>
						{t('Fee')}: <Text style={{ color: '#000' }}>500 TL</Text>
					</Text>

					<SubmitButtonComponent title={t('Pay Fee')} fullWidth onPress={() => {}} />
					<TouchableOpacity>
						<Text style={styles.getCar}>{t('Get your car')}</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default vechicle;

const styles = StyleSheet.create({
	image: {
		margin: scale(10),
		alignSelf: 'center',
		width: '90%',
		borderRadius: scale(10),
		height: verticalScale(150),
	},
	line: {
		borderBottomWidth: 2,
		borderBottomColor: COLORS.gray,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: verticalScale(2) },
		shadowOpacity: 0.1,
		shadowRadius: scale(4), // Reduced shadow radius
		elevation: 2,
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
