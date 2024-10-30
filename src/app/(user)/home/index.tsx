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
import { router } from 'expo-router';

export default function userHomeIndex() {
	return (
		<View style={{ flex: 1 }}>
			<Header />
			<ScrollView style={{ flexGrow: 1 }}>
				<Text style={style.sectionTitle}>Tender News</Text>
				<TenderNews />

				<View style={style.categoryWapper}>
					<Text style={style.sectionTitle}>Service Category</Text>
					<TouchableOpacity
						onPress={() => {
							router.push('../home/service');
						}}
					>
						<Text style={style.seeall}>see all</Text>
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
