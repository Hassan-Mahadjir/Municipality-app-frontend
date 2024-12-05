import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { router } from 'expo-router';
import { COLORS } from '@/constants/Colors';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { EventValues } from '@/types/community.type';
import { useTranslation } from 'react-i18next';

interface CardProps {
	data: EventValues;
}

const Card: React.FC<CardProps> = ({ data }) => {
	const { t, i18n } = useTranslation();
	const lang = i18n.language.toUpperCase(); // Device language

	return (
		<View
			style={{
				flex: 1,
				marginHorizontal: scale(5),
				backgroundColor: '#fff',
				padding: scale(5),
				borderRadius: scale(10),
			}}
		>
			<TouchableOpacity
				onPress={() => {
					router.push(`./eventDetail/${data.id}`);
				}}
			>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ width: '50%' }}>
						<Text numberOfLines={3} style={styles.imageText}>
							{data.language === lang
								? data.header
								: data.translations.find(
										(translation) => translation.language === lang
								  )?.header || data.header}
						</Text>

						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginTop: verticalScale(5),
							}}
						>
							<Fontisto name='date' size={20} color={COLORS.primary} />
							<Text style={{ marginLeft: scale(5) }}>{data.date}</Text>
						</View>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginTop: verticalScale(5),
							}}
						>
							<FontAwesome6 name='clock' size={20} color={COLORS.primary} />
							<Text style={{ marginLeft: scale(5) }}>{data.startTime}</Text>
						</View>
					</View>
					<Image
						resizeMode='cover'
						source={{ uri: data.images[0].imageUrl }}
						style={styles.pageImage}
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default Card;
export const styles = StyleSheet.create({
	pageImage: {
		height: verticalScale(80),
		width: '45%',
		borderRadius: scale(10),
		marginLeft: scale(10),
	},
	imageText: {
		fontSize: moderateScale(13),
		color: COLORS.secondary,
		textAlign: 'justify',
		marginTop: verticalScale(5),
	},
});
