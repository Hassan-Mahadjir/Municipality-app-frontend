import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	StatusBar,
} from 'react-native';
import React from 'react';
import Header from '@/components/home/Header';
import TenderNews from '@/components/home/TenderNews';
import ServiceCategory from '@/components/home/ServiceCategory';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { COLORS } from '@/constants/Colors';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function userHomeIndex() {
	const { t } = useTranslation();
	const municipalityAnnouncements = t('municipalityAnnouncements');
	const serviceCategory = t('serviceCategory');
	const seeAll = t('seeAll');

	return (
		<View style={{ flex: 1 }}>
			<StatusBar barStyle={'default'} />
			<Header />
			<ScrollView style={{ flexGrow: 1 }}>
				<Text style={style.sectionTitle}>{municipalityAnnouncements}</Text>
				<TenderNews />

				<View style={style.categoryWapper}>
					<Text style={style.sectionTitle}>{serviceCategory}</Text>
					<TouchableOpacity
						onPress={() => {
							router.push('../home/service');
						}}
					>
						<Text style={style.seeall}>{seeAll}</Text>
					</TouchableOpacity>
				</View>
				<ServiceCategory />
			</ScrollView>
		</View>
	);
}

const style = StyleSheet.create({
	sectionTitle: {
		color: COLORS.primary,
		marginTop: verticalScale(3),
		marginLeft: scale(10),
		marginBottom: scale(-3),
		fontWeight: 'bold',
		fontSize: moderateScale(14),
	},
	categoryWapper: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginRight: scale(15),
	},
	seeall: {
		fontSize: moderateScale(16),
		marginTop: verticalScale(3),
		fontWeight: '500',
		marginBottom: scale(-3),
		color: COLORS.secondary,
	},
});
