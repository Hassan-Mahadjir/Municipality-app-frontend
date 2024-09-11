import { COLORS } from '@/constants/Colors';
import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
	pageImage: {
		height: verticalScale(100),
		width: '100%',
		borderRadius: scale(10),
	},
	imageText: {
		fontSize: moderateScale(12),
		color: COLORS.gray,
		textAlign: 'justify',
		marginTop: verticalScale(5),
	},
	typeText: {
		color: COLORS.primary,
		fontSize: moderateScale(12),
	},
	agoText: {
		color: COLORS.gray,
		fontSize: moderateScale(12),
	},
});
