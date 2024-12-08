import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { router } from 'expo-router';
import { COLORS } from '@/constants/Colors';
import { ReportedanimalValues } from '@/types/community.type';
import { useTranslation } from 'react-i18next';
import { formatDistanceToNow } from 'date-fns';
import { tr, enUS } from 'date-fns/locale';
import type { Locale } from 'date-fns';

interface CardProps {
	data: ReportedanimalValues;
}

const AnimalCard: React.FC<CardProps> = ({ data }) => {
	const { t, i18n } = useTranslation();

	const lang = i18n.language.toUpperCase();
	// Determine locale based on i18n.language
	const localeMap: Record<string, Locale> = {
		en: enUS,
		tr: tr,
	};
	const currentLocale = localeMap[i18n.language] || enUS; // Default to English if not found

	return (
		<View style={{ flex: 1, marginHorizontal: scale(5) }}>
			<TouchableOpacity onPress={() => router.push(`./animal/${data.id}`)}>
				<Image
					source={{ uri: data.images[0].imageUrl }}
					style={styles.pageImage}
				/>
			</TouchableOpacity>
			<Text style={styles.numberText}>
				{t('animalNumber')}:{' '}
				<Text style={{ fontWeight: 'bold' }}>{data.id}</Text>
			</Text>

			<View>
				<Text style={styles.numberText}>
					{t('status')}:{' '}
					<Text style={{ color: COLORS.primary }}>
						{data.language === lang
							? data.status
							: data.translations.find(
									(translation) => translation.language === lang
							  )?.status || data.status}
					</Text>
				</Text>

				<Text style={styles.numberText}>
					{formatDistanceToNow(new Date(data.createAt), {
						addSuffix: true,
						locale: currentLocale, // Specify the locale dynamically
					})}
				</Text>
			</View>
		</View>
	);
};

export default AnimalCard;

export const styles = StyleSheet.create({
	pageImage: {
		height: verticalScale(100),
		width: '100%',
		borderRadius: scale(10),
	},
	numberText: {
		fontSize: moderateScale(14),
		textAlign: 'center',
		marginTop: verticalScale(5),
	},
});
