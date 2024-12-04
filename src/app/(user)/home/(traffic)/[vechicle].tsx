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
import { useVehicle } from '@/services/api/vehicle';
import { nan } from 'zod';

const vechicle = () => {
	const { vechicle } = useLocalSearchParams();
	const { t } = useTranslation();
	const { i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();
	const { vehicleData, isLoading } = useVehicle(+vechicle);
	const vehicleinfo = vehicleData?.data.data;
	return (
		<View>
			<Stack.Screen
				options={{
					title: `${vehicleinfo?.plateNumber}`,
					headerStyle: { backgroundColor: '#093D56' },
					// '#f4511e'
					headerTintColor: '#ffff',
					headerTitleAlign: 'center',
					
				}}
			/>
			<StatusBar barStyle={'dark-content'} />
			<View>
				<Image
					style={styles.image}
					source={{
						uri: vehicleinfo?.imageUrl
					}}
				/>
				<View style={styles.line}></View>
				<View style={{ margin: scale(10) }}>
					<Text style={styles.keyDiscription}>{vehicleinfo?.brand}</Text>
					<Text style={styles.reason}>{t('reason')}</Text>
					<Text style={{ textAlign: 'justify' }}>
					{
				vehicleinfo?.language === lang
					? vehicleinfo?.reason
					: vehicleinfo?.translations.find(
							(translation) => translation.language === lang
					  )?.reason || vehicleinfo?.reason
			}
					</Text>
					<Text style={{ marginTop: verticalScale(15), color: COLORS.primary }}>
						{t('collecteddate')} <Text style={{ color: '#000' }}>{vehicleinfo?.collectedDate.split('T')[0]}</Text>
					</Text>
					<View
						style={{
							flexDirection: 'row',
							marginVertical: verticalScale(10),
							marginLeft: scale(-5),
						}}
					>
						<EvilIcons name='location' size={24} color={COLORS.primary} />
						<Text>{vehicleinfo?.location}</Text>
					</View>

					<Text
						style={{ color: COLORS.primary, marginBottom: verticalScale(15) }}
					>
						{t('fee')} <Text style={{ color: '#000' }}>{vehicleinfo?.fee}</Text>
					</Text>

					<SubmitButtonComponent title={t('payfee')} fullWidth onPress={() => {}} />
					<TouchableOpacity>
						<Text style={styles.getCar}>{t('getyourcar')}</Text>
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
