import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '@/components/home/Header';
import TenderNews from '@/components/home/TenderNews';
import ServiceCategory from '@/components/home/ServiceCategory';
import { scale, verticalScale } from 'react-native-size-matters';
import { COLORS } from '@/constants/Colors';
import { useTranslation } from 'react-i18next';
import { router } from 'expo-router';

export default function userHomeIndex() {
	const { t } = useTranslation(); // Translation hook

	return (
		<View style={{ flex: 1 }}>
			<Header />
			<ScrollView style={{ flexGrow: 1 }}>
				{/* Tender News translated */}
				<Text style={style.sectionTitle}>{t('tenderNews')}</Text>
				<TenderNews />

				<View style={style.categoryWapper}>
					{/* Service Category translated */}
					<Text style={style.sectionTitle}>{t('serviceCategory')}</Text>
					<TouchableOpacity
						onPress={() => {
							router.push('./service');
						}}
					>
						{/* See All translated */}
						<Text style={style.seeall}>{t('seeAll')}</Text>
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
		marginTop: verticalScale(5),
		marginLeft: scale(10),
		marginBottom: scale(-5),
		fontWeight: 'bold',
	},
	categoryWapper: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginRight: scale(15),
	},
	seeall: {
		fontSize: 16,
	},
});
