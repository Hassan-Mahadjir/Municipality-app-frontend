import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '@/components/services/Header';
import { router, useLocalSearchParams } from 'expo-router';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { COLORS } from '@/constants/Colors';
import { useTranslation } from 'react-i18next';
import { formatDistanceToNow } from 'date-fns';
import { tr, enUS } from 'date-fns/locale';
import type { Locale } from 'date-fns';

const NewsDetails = () => {
	const { id ,contents, publishedAt, url,author} = useLocalSearchParams();
	
	const [content, setContent] = useState<string[]>([]);
	const { t, i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();
	// Determine locale based on i18n.language
	const localeMap: Record<string, Locale> = {
		en: enUS,
		tr: tr,
	};
	const currentLocale = localeMap[i18n.language] || enUS; // Default to English if not found

	// Ensure `news` is a valid number

	// Fetch only if `newsId` is valid



	return (
		<View style={{flex:1}}>
			<Header
				title={
					id
				}
				backgroundImage={{
					uri: url,
				}}
				onBackPress={() => router.back()}
			/>
			<View style={{ marginVertical: verticalScale(10),justifyContent:'space-between' ,flexDirection: 'row',alignItems:'center',paddingHorizontal:scale(10)}}>

					<View style={{ flexDirection: 'row' ,paddingVertical:verticalScale(5)}}>
						<EvilIcons name='clock' size={24} color={COLORS.gray} />
						<Text style={{ color: COLORS.gray }}>
							{formatDistanceToNow(new Date(publishedAt.toString()), {
								addSuffix: true, // Adds "ago" to the string
								locale: currentLocale, //Specify the locale dynamically
							})}
						</Text>
				
				</View>
				<Text style={{ marginRight:scale(12) , fontWeight:'bold',textAlign: 'center'}}> {t('author')} {author}</Text>
			</View>
			<View
				style={{ borderBottomWidth: 2, borderBottomColor: COLORS.gray }}
			></View>
			<ScrollView
				style={{ marginHorizontal: scale(10), flexGrow: 1 }}
				showsVerticalScrollIndicator={false}
			>
				<Text style={{
					fontSize: moderateScale(16),
					marginTop: verticalScale(10),
					textAlign:'justify'
				}}>
				{contents}
				</Text>
				
			</ScrollView>
		</View>
	);
};

export default NewsDetails;

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
});
