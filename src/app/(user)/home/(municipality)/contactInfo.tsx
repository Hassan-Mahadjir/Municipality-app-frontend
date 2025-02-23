import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	View,
	Linking,
	TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { COLORS } from '@/constants/Colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const info = [
	{
		id: 1,
		icon: 'https://png.pngtree.com/png-clipart/20210216/ourmid/pngtree-phone-icon-in-circle-black-png-image_5994540.png',
		detail: '+90 (392) 630 05 00',
	},
	{
		id: 2,
		icon: 'https://png.pngtree.com/png-clipart/20210216/ourmid/pngtree-phone-icon-in-circle-black-png-image_5994540.png',
		detail: '444 4 GMB (444 4 462)',
	},
	{
		id: 3,
		icon: `https://icons.veryicon.com/png/o/system/dan_system/fax-11.png`,
		detail: '+90 (392) 366 16 08',
	},
];

const contactInfo = () => {
	const { t } = useTranslation();
	const socialMedia = t('socialMedia');
	const getInTouch = t('getInTouch');
	const inquiriesMessage = t('inquiries');

	return (
		<View>
			<Stack.Screen options={{ title: t('contactInformation') }} />
			{/* Translated title */}
			<View style={{ alignItems: 'center', marginVertical: verticalScale(10) }}>
				<Text style={styles.get}>{getInTouch}</Text>
				{/* Translated text */}
				<Text style={{ color: COLORS.gray }}>{inquiriesMessage}</Text>
			</View>
			<FlatList
				data={info}
				style={{ marginTop: verticalScale(10) }}
				contentContainerStyle={{
					gap: scale(10),
					paddingBottom: verticalScale(50),
				}}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<View style={styles.container}>
						<TouchableOpacity
							onPress={() => Linking.openURL(`tel:${item.detail}`)}
						>
							<View style={{ flexDirection: 'row' }}>
								<Image source={{ uri: item.icon }} style={styles.icon} />
								<Text style={styles.text}>{item.detail}</Text>
							</View>
						</TouchableOpacity>
					</View>
				)}
			/>
			<View style={{ alignItems: 'center', marginVertical: verticalScale(10) }}>
				<Text style={styles.get}>{socialMedia}</Text>
				{/* Translated social media text */}
				<View
					style={{
						flexDirection: 'row',
						gap: scale(30),
						marginTop: verticalScale(20),
					}}
				>
					<TouchableOpacity
						onPress={() =>
							Linking.openURL(`https://www.facebook.com/GazimagusaBelediyesi`)
						}
					>
						<Entypo name='facebook' size={42} color={COLORS.secondary} />
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() =>
							Linking.openURL(`https://www.instagram.com/gazimagusabelediyesi`)
						}
					>
						<Entypo name='instagram' size={42} color={COLORS.secondary} />
					</TouchableOpacity>

					<TouchableOpacity onPress={() => {}}>
						<FontAwesome6 name='whatsapp' size={42} color={COLORS.secondary} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default contactInfo;

const styles = StyleSheet.create({
	get: {
		color: COLORS.primary,
		fontSize: moderateScale(18),
		fontWeight: 'bold',
		marginBottom: verticalScale(8),
	},
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		marginHorizontal: scale(10),
		padding: scale(7),
		borderRadius: scale(10),
		shadowColor: '#000',
		shadowOffset: { width: 0, height: verticalScale(2) },
		shadowOpacity: 0.1,
		shadowRadius: scale(4),
		elevation: 2,
	},
	text: {
		marginLeft: scale(20),
		fontSize: moderateScale(16),
		color: COLORS.secondary,
		alignSelf: 'center',
	},
	icon: {
		width: scale(40),
		height: verticalScale(40),
	},
});
