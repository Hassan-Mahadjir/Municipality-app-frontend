import { COLORS } from '@/constants/Colors';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	headerContainer: {
		padding: scale(15),
		paddingTop: verticalScale(40),
		backgroundColor: COLORS.secondary,
	},
	logoutContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: '75%',
	},
	logoutText: {
		color: '#fff',
		fontSize: moderateScale(18),
		marginRight: scale(5),
	},
	profileImage: {
		borderWidth: moderateScale(3),
		borderColor: '#fff',
		borderRadius: moderateScale(80) / 2,
		width: scale(80),
		height: scale(80),
	},
	profileName: {
		marginTop: verticalScale(10),
		color: '#fff',
		fontSize: moderateScale(20),
	},
	settingsCard: {
		height: verticalScale(70),
		backgroundColor: '#fff',
		borderRadius: moderateScale(10),
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: scale(10),
	},
	settingsText: {
		marginHorizontal: scale(15),
		flex: 1,
	},
	settingsTitleText: {
		fontSize: moderateScale(18),
		fontWeight: '700',
	},
});
